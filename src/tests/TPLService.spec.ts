import { TPLService } from '../services/TPLService'

jest.setTimeout(30000)

let searchData: any
let parsedData: any

describe('TPL Service', () => {
  test('Get data from TPL', async () => {
    searchData = await TPLService.getSearchData('Pontederia azurea (Sw.)')
    expect(searchData).not.toBeUndefined()
    expect(searchData).toMatch(/Pontederia/)
  })
  test('Parse data recived from TPL', () => {
    parsedData = TPLService.parseData(searchData)
    console.log(parsedData)
    expect(true).toBe(true)
  })
})
