import axios from 'axios'
import papaparse from 'papaparse'

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

  static parseData(sepeciesData: string): any {
    try {
      const parsedData = papaparse.parse(sepeciesData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      })

      if (parsedData?.errors.length !== 0) {
        throw new Error('Incorrect CSV')
      } else {
        return parsedData.data
      }
    } catch (error) {
      throw new Error(`Parsing data error: ${error}`)
    }
  }
}
