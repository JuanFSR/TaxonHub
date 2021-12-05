import { FloraBrasilService } from './services/flora-brasil.service'
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

let floraBrasil : FloraBrasilService = new FloraBrasilService;

floraBrasil.consultTaxonomicData('Eichhornia%20azurea');