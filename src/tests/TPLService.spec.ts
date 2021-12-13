import { TPLService } from '../services/TPLService'

jest.setTimeout(30000)

let searchData: any
let parsedData: Array<any>
let legitimateData: any

describe('TPL Service', () => {
  test('Get data from TPL', async () => {
    searchData = await TPLService.getSearchData('Pontederia azurea (Sw.)')
    expect(searchData).not.toBeUndefined()
    expect(searchData).toMatch(/Pontederia/)
  })
  test('Parse data recived from TPL', () => {
    parsedData = TPLService.parseData(searchData)
    expect(parsedData.length).toBeGreaterThan(0)
  })
  test('Get Legitimate Species from TPL', async () => {
    legitimateData = await TPLService.getLegitimateSpeciesName('Pontederia azurea (Sw.)')
    expect(legitimateData).not.toBeUndefined()
  })
})
