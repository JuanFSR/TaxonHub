import * as typeorm from 'typeorm'

@typeorm.Entity()
@typeorm.Unique(['usageKey'])
export class GBIFSpeciesEntity {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string

  @typeorm.Column()
  usageKey: number

  @typeorm.Column()
  scientificName: string

  @typeorm.Column()
  canonicalName: string

  @typeorm.Column()
  rank: string

  @typeorm.Column()
  confidence: number

  @typeorm.Column()
  matchType: string

  @typeorm.Column()
  kingdom: string

  @typeorm.Column()
  phylum: string

  @typeorm.Column()
  order: string

  @typeorm.Column()
  family: string

  @typeorm.Column()
  genus: string

  @typeorm.Column()
  species: string

  @typeorm.Column()
  kingdomKey: number

  @typeorm.Column()
  phylumKey: number

  @typeorm.Column()
  classKey: number

  @typeorm.Column()
  orderKey: number

  @typeorm.Column()
  familyKey: number

  @typeorm.Column()
  genusKey: number

  @typeorm.Column()
  speciesKey: number

  @typeorm.Column()
  synonym: boolean

  @typeorm.Column()
  class: string

  // @typeorm.CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  // createdAt: string

  // @typeorm.UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', update: true })
  // updatedAt: string
}
