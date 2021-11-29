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
