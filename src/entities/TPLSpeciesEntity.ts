import * as typeorm from 'typeorm'
import { TPLSpeciesDTO } from '../dtos/TPLSpeciesDTO'

@typeorm.Entity()
@typeorm.Unique(['ID'])
export class TPLSpeciesEntity {
  constructor(speciesDTO: TPLSpeciesDTO) {
    if (speciesDTO) {
      this.IdFromTPL = speciesDTO.ID
      this.MajorGroup = speciesDTO['Major group']
      this.Family = speciesDTO.Family
      this.GenusHybridMarker = speciesDTO['Genus hybrid marker']
      this.Genus = speciesDTO.Genus
      this.SpeciesHybridMarker = speciesDTO['Species hybrid marker']
      this.Species = speciesDTO.Species
      this.InfraspecificRank = speciesDTO['Infraspecific rank']
      this.InfraspecificEpithet = speciesDTO['Infraspecific epithet']
      this.Authorship = speciesDTO.Authorship
      this.TaxonomicStatusinTPL = speciesDTO['Taxonomic status in TPL']
      this.NomenclaturalStatusFromOriginalDataSource = speciesDTO['Nomenclatural status from original data source']
      this.ConfidenceLevel = speciesDTO['Confidence level']
      this.Source = speciesDTO.Source
      this.SourceId = speciesDTO['Source id']
      this.INPIId = speciesDTO['INPI id']
      this.Publication = speciesDTO.Publication
      this.Collation = speciesDTO.Collation
      this.Page = speciesDTO.Page
      this.Date = speciesDTO.Date
      this.AcceptedId = speciesDTO['Accepted id']
    }
  }

  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string

  @typeorm.Column()
  IdFromTPL: string

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
