import axios from 'axios'
import { GBIFSpeciesEntity } from '../entities/GBIFSpeciesEntity'
import { GBIFSpeciesRepository } from '../repositories/GBIFSpeciesRepository'

export class GBIFService {
  static GBIFUrl = 'http://api.gbif.org/v1'

  static async getSpecies(speciesName: string): Promise<any> {
    const result = await axios.get(`${GBIFService.GBIFUrl}/species/match`, {
      params: {
        name: speciesName,
        strict: true,
      },
      timeout: 10000,
    })
    const entity: GBIFSpeciesEntity = result.data
    const Repository = await GBIFSpeciesRepository()
    Repository.save(entity)
    console.log(result.data)
    return result.data
  }

  static async getOccurrences(taxonKey: number, offset?: number, limit?: number): Promise<any> {
    const result = await axios.get(`${GBIFService.GBIFUrl}/occurrence/search/`, {
      params: {
        taxon_key: taxonKey,
        offset: offset ? offset : 0,
        limit: limit ? limit : 20,
      },
      timeout: 10000,
    })
    console.log(result.data)
    return result.data
  }

  static async getSpeciesFromDB(): Promise<[GBIFSpeciesEntity[], number]> {
    const Repository = await GBIFSpeciesRepository()
    return Repository.findAndCount()
  }
}
