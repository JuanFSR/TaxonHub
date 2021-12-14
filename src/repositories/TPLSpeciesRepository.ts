import { Connection, Repository } from 'typeorm'
import { Database } from '../database/TypeORMConnection'
import { TPLSpeciesEntity } from '../entities/TPLSpeciesEntity'

export async function TPLSpeciesRepository(): Promise<Repository<TPLSpeciesEntity>> {
  const connectionName = 'default'
  const database = new Database()
  const dbConn: Connection = await database.getConnection(connectionName)
  return dbConn.getRepository(TPLSpeciesEntity)
}
