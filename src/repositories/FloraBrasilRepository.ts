import { Connection, Repository } from 'typeorm'
import { Database } from '../database/TypeORMConnection'
import { FloraResponseDTO } from '../dtos/floraResponseDTO'

export async function floraBrasilRepository(): Promise<Repository<FloraResponseDTO>> {
  const connectionName = 'default'
  const database = new Database()
  const dbConn: Connection = await database.getConnection(connectionName)
  return dbConn.getRepository(FloraResponseDTO)
}