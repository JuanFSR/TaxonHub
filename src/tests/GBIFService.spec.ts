import { GBIFService } from '../services/GBIFService'

jest.setTimeout(30000)

let searchData: any
let taxonkey: number

describe('GBIF Service', () => {
  test('Get species from GBIF', async () => {
    searchData = await GBIFService.getSpecies('Pontederia azurea (Sw.)')
    taxonkey = searchData.usageKey
    expect(searchData).not.toBeUndefined()
  })
  test('Get occurrences from GBIF', async () => {
    searchData = await GBIFService.getOccurrences(taxonkey, 0, 20)
    expect(searchData).not.toBeUndefined()
  })
  test('Get Species of GBIF from DB', async () => {
    const result = await GBIFService.getSpeciesFromDB()
    expect(result[0]).not.toBeUndefined()
  })
})
