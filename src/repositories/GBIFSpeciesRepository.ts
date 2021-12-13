import { Connection, Repository } from 'typeorm'
import { Database } from '../database/TypeORMConnection'
import { GBIFSpeciesEntity } from '../entities/GBIFSpeciesEntity'

export async function GBIFSpeciesRepository(): Promise<Repository<GBIFSpeciesEntity>> {
  const connectionName = 'default'
  const database = new Database()
  const dbConn: Connection = await database.getConnection(connectionName)
  return dbConn.getRepository(GBIFSpeciesEntity)
}
