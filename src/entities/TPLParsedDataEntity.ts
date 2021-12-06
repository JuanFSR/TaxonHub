import * as typeorm from 'typeorm'

@typeorm.Entity()
@typeorm.Unique(['ID'])
export class TPLParsedDataDTO {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string

  @typeorm.Column()
  ID: string

  @typeorm.Column()
  MajorGroup: string

  @typeorm.Column()
  Family: string

  @typeorm.Column()
  GenusHybridMarker: string

  @typeorm.Column()
  Genus: string

  @typeorm.Column()
  SpeciesHybridMarker: string

  @typeorm.Column()
  Species: string

  @typeorm.Column()
  InfraspecificRank: string

  @typeorm.Column()
  InfraspecificEpithet: string

  @typeorm.Column()
  Authorship: string

  @typeorm.Column()
  TaxonomicStatusinTPL: string

  @typeorm.Column()
  NomenclaturalStatusFromOriginalDataSource: string

  @typeorm.Column()
  ConfidenceLevel: string

  @typeorm.Column()
  Source: string

  @typeorm.Column()
  SourceId: number

  @typeorm.Column()
  INPIId: string

  @typeorm.Column()
  Publication: string

  @typeorm.Column()
  Collation: number

  @typeorm.Column()
  Page: number

  @typeorm.Column()
  Date: number

  @typeorm.Column()
  AcceptedId: string
}
