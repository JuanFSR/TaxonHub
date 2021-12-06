import axios from 'axios'

export class TPLService {
  static TPLUrl = 'http://www.theplantlist.org'

  static async getSearchData(speciesName: string): Promise<any> {
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

    return result
  }
}
