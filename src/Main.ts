import { consultTaxonomicData, taxonCleanData } from './services/flora-brasil.service'
import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
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

let nameSpecies: string = 'Eichhornia%20azurea';

// Execute request to the Flora do Brasil API
consultTaxonomicData(nameSpecies);
console.log('Running')
