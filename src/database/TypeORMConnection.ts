import 'reflect-metadata'
import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnectionManager } from 'typeorm'

export class Database {
  private connectionManager: ConnectionManager

  constructor() {
    this.connectionManager = getConnectionManager()
  }

  public async getConnection(name: string): Promise<Connection> {
    const CONNECTION_NAME: string = name
    let connection: Connection
    const hasConnection = this.connectionManager.has(CONNECTION_NAME)
    if (hasConnection) {
      connection = this.connectionManager.get(CONNECTION_NAME)
      if (!connection.isConnected) {
        connection = await connection.connect()
      }
    } else {
      const connectionOptions: ConnectionOptions = {
        name: 'default',
        type: 'sqlite',
        database: 'taxonHub',
        synchronize: false,
        logging: false,
        entities: [],
      }
      connection = await createConnection(connectionOptions)
    }
    return connection
  }
}
