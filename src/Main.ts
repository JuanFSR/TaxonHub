import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { SLEntity } from './entities/SLEntity'
import { slData } from './services/SLServices'

let _connection: Connection
export async function connect(databaseTH: string): Promise<any> {
  _connection = await createConnection({
    type: 'sqlite',
    database: databaseTH,
    synchronize: true,
    logging: false,
    entities: [SLEntity],
  })
}
export function connected(): boolean {
  return typeof _connection !== undefined
}

let nameSpecies: string = 'Cedrela%20fissilis';
slData(nameSpecies);
