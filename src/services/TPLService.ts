import axios from 'axios'
import cheerio from 'cheerio'
import papaparse from 'papaparse'
import { TPLSpeciesDTO } from '../dtos/TPLSpeciesDTO'
import { TPLSpeciesEntity } from '../entities/TPLSpeciesEntity'
import { TPLSpeciesRepository } from '../repositories/TPLSpeciesRepository'

export class TPLService {
  static TPLUrl = 'http://www.theplantlist.org'

  static async getSearchData(speciesName: string): Promise<string> {
    const result = await axios
      .get(`${TPLService.TPLUrl}/tpl1.1/search`, {
        params: {
          q: speciesName,
          csv: true,
        },
        timeout: 10000,
      })
      .catch((error) => {
        if (error.response) {
          throw new Error(`Website response error with status: ${error.response.status}`)
        } else if (error.request) {
          throw new Error(`Website request error: ${error.request}`)
        } else {
          throw new Error(`Error in setting up the request: ${error.message}`)
        }
      })

    return result.data
  }

  static parseData(speciesData: string): any {
    try {
      const parsedData = papaparse.parse(speciesData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      })

      if (parsedData?.errors.length !== 0) {
        throw new Error('Incorrect CSV')
      } else {
        return parsedData.data.map((element) => element as TPLSpeciesDTO)
      }
    } catch (error) {
      throw new Error(`Parsing data error: ${error}`)
    }
  }

  static async saveDataOnDB(speciesDTOs: Array<TPLSpeciesDTO>): Promise<Array<TPLSpeciesEntity>> {
    const Repository = await TPLSpeciesRepository()
    const entities = speciesDTOs.map((element) => new TPLSpeciesEntity(element))
    const result = await Repository.save(entities)
    return result
  }

  static async getLegitimateSpeciesName(synonymSpeciesName: any): Promise<any> {
    try {
      const synonymsHtmlPage = await axios.get(`${TPLService.TPLUrl}/tpl1.1/search`, {
        params: {
          q: synonymSpeciesName,
        },
        timeout: 10000,
      })

      let $ = cheerio.load(synonymsHtmlPage.data)

      let validSynonym = Object()
      $('.names.results > tbody > tr > .name.Synonym').each((index, element) => {
        if (!$(element).text().includes('[Illegitimate]')) {
          validSynonym = {
            name: $(element).text(),
            endpoint: $(element).children().attr('href'),
          }
        }
      })

      const acceptedNameHtmlPage = await axios.get(`${TPLService.TPLUrl}/${validSynonym.endpoint}`, {
        timeout: 10000,
      })

      $ = cheerio.load(acceptedNameHtmlPage.data)
      const acceptedName = $('#columns .subtitle > a > .name').text()
      console.log(acceptedName)
      return acceptedName
    } catch (error) {
      throw new Error(`Error in getting legitimate species name: ${error}`)
    }
  }

  static async listSpeciesFromFB(): Promise<[TPLSpeciesEntity[], number]> {
    const Repository = await TPLSpeciesRepository()
    const result = await Repository.findAndCount()
    return result
  }
}
