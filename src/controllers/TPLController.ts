import { isBlank } from '../helpers/IsBlankHelper'
import { TPLService } from '../services/TPLService'

export class TPLController {
  static async searchSpecies(speciesName: string): Promise<any> {
    if (!isBlank(speciesName)) {
      try {
        let searchedData = await TPLService.getSearchData(speciesName)
        let parsedData = TPLService.parseData(searchedData)
        const hasAcceptedName = parsedData.some((searchRow: any) => {
          return searchRow['Taxonomic status in TPL'] === 'Accepted'
        })

        if (!hasAcceptedName && parsedData.length > 0) {
          const acceptedName = await TPLService.getLegitimateSpeciesName(speciesName)

          if (acceptedName && acceptedName !== null) {
            searchedData = await TPLService.getSearchData(acceptedName)
            parsedData = TPLService.parseData(searchedData)
          }
        }

        const resultSearch = await TPLService.saveDataOnDB(parsedData)

        return resultSearch
      } catch (error) {
        throw new Error(error as string)
      }
    } else throw new Error('A species name is required')
  }
}
