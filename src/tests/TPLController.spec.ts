import { TPLController } from '../controllers/TPLController'

jest.setTimeout(30000)

describe('TPL Controller', () => {
  test('Search Species', async () => {
    const result = await TPLController.searchSpecies('Pontederia azurea (Sw.)')
    expect(result).not.toBeUndefined()
  })
})
