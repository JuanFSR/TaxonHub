import axios from 'axios'
import { GBIFOccurrenceEntity } from '../entities/GBIFOccurrenceEntity'
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
    console.log(result.data)
    const entity: GBIFSpeciesEntity = result.data
    GBIFSpeciesRepository.save(entity)
    return entity
  }

  static async getOccurrences(taxonKey: string, offset?: number, limit?: number): Promise<any> {
    const result = await axios.get(`${GBIFService.GBIFUrl}/occurrence/search/`, {
      params: {
        taxon_key: taxonKey,
        offset: offset ? offset : 0,
        limit: limit ? limit : 20,
      },
      timeout: 10000,
    })
    console.log(result.data)
    const entities: Array<GBIFOccurrenceEntity> = result.data
    GBIFSpeciesRepository.save(entities)
    return entities
  }
}
