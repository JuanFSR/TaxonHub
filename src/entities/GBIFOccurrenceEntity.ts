import * as typeorm from 'typeorm'

export class GBIFOccurrencieEntity {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string
}
