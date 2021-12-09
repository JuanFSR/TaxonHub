import { consultTaxonomicData, taxonCleanData } from './services/flora-brasil.service'
import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { TaxonomicData } from './taxonDataFloraBrasil'
let _connection: Connection
export async function connect(databaseTH: string): Promise<any> {
  _connection = await createConnection({
    type: 'sqlite',
    database: databaseTH,
    synchronize: true,
    logging: false,
    entities: [],
  })
}
export function connected(): boolean {
  return typeof _connection !== undefined
}

// let floraBrasil : FloraBrasilService = new FloraBrasilService;
let nameSpecies: string = 'Eichhornia%20azurea';

// floraBrasil.consultTaxonomicData('Eichhornia%20azurea', (floraDataResponse : TaxonomicData) => {
//   console.log(floraDataResponse);
// });

consultTaxonomicData(nameSpecies);
