import axios from 'axios'

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
    console.log(result)
    return result
  }
}
