import * as typeorm from 'typeorm'

@typeorm.Entity()
@typeorm.Unique(['ID'])
export class SLEntity {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string

  @typeorm.Column()
  ID: string

  @typeorm.Column()
  entry_name: string

  @typeorm.Column()
  found_name: string

  @typeorm.Column()
  accepted_name: string

  @typeorm.Column()
  database: string

  @typeorm.Column()
  family: string

  @typeorm.Column()
  country: string

  @typeorm.Column()
  year: number

  @typeorm.Column()
  month: number

  @typeorm.Column()
  day: number

  @typeorm.Column()
  lat: number

  @typeorm.Column()
  long: number

  @typeorm.Column()
  coord_SPL_mun: string
}