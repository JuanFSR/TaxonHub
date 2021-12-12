import { GBIFService } from '../services/GBIFService'

jest.setTimeout(30000)

let searchData: any

describe('TPL Service', () => {
  test('Get data from TPL', async () => {
    searchData = await GBIFService.getSpecies('Pontederia azurea (Sw.)')
    expect(searchData).not.toBeUndefined()
  })
})
