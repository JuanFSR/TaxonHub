import * as typeorm from 'typeorm'
import { Timestamp } from 'typeorm'
import { ExtensionsDTO } from '../dtos/ExtensionsDTO'
import { GadmDTO } from '../dtos/GdamDTO'
import { MediaDTO } from '../dtos/MediaDTO'

export class GBIFOccurrenceEntity {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string

  @typeorm.Column()
  speciesId: string

  @typeorm.Column()
  key: number

  @typeorm.Column()
  datasetKey: string

  @typeorm.Column()
  publishingOrgKey: string

  @typeorm.Column()
  installationKey: string

  @typeorm.Column()
  publishingCountry: string

  @typeorm.Column()
  protocol: string

  @typeorm.Column()
  lastCrawled: Date

  @typeorm.Column()
  lastParsed: Date

  @typeorm.Column()
  crawlId: number

  @typeorm.Column()
  hostingOrganizationKey: string

  @typeorm.Column('simple-json')
  extensions: ExtensionsDTO

  @typeorm.Column()
  basisOfRecord: string

  @typeorm.Column()
  occurrenceStatus: string

  @typeorm.Column()
  acceptedTaxonKey: number

  @typeorm.Column()
  acceptedScientificName: string

  @typeorm.Column()
  genericName: string

  @typeorm.Column()
  specificEpithet: string

  @typeorm.Column()
  taxonRank: string

  @typeorm.Column()
  dateIdentified: Date

  @typeorm.Column()
  decimalLongitude: number

  @typeorm.Column()
  decimalLatitude: number

  @typeorm.Column()
  stateProvince: string

  @typeorm.Column()
  year: number

  @typeorm.Column()
  month: number

  @typeorm.Column()
  day: number

  @typeorm.Column()
  eventDate: Date

  // ! verificar qual de fato é o tipo (string mesmo?)
  @typeorm.Column('simple-array')
  issues: Array<string>

  @typeorm.Column()
  modified: Date

  @typeorm.Column()
  lastInterpreted: Date

  @typeorm.Column()
  references: string

  @typeorm.Column()
  license: string

  // ! verificar qual de fato é o tipo (string mesmo?)
  @typeorm.Column('simple-array')
  identifiers: Array<string>

  @typeorm.Column('simple-array')
  media: Array<MediaDTO>

  // ! verificar qual de fato é o tipo (string mesmo?)
  @typeorm.Column('simple-array')
  facts: Array<string>

  // ! verificar qual de fato é o tipo (string mesmo?)
  @typeorm.Column('simple-array')
  relations: Array<string>

  @typeorm.Column('simple-json')
  gadm: GadmDTO

  @typeorm.Column()
  isInCluster: boolean

  @typeorm.Column()
  geodeticDatum: string

  @typeorm.Column()
  countryCode: string

  @typeorm.Column('simple-array')
  recordedByIDs: Array<string>

  @typeorm.Column('simple-array')
  identifiedByIDs: Array<string>

  @typeorm.Column()
  country: string

  @typeorm.Column()
  rightsHolder: string

  @typeorm.Column()
  identifier: string

  @typeorm.Column()
  'http://unknown.org/nick': string

  @typeorm.Column()
  verbatimEventDate: string

  @typeorm.Column()
  datasetName: string

  @typeorm.Column()
  verbatimLocality: string

  @typeorm.Column()
  gbifID: string

  @typeorm.Column()
  collectionCode: string

  @typeorm.Column()
  occurrenceID: string

  @typeorm.Column()
  taxonID: string

  @typeorm.Column()
  catalogNumber: string

  @typeorm.Column()
  recordedBy: string

  @typeorm.Column()
  institutionCode: string

  // ! verificar se o tipo está correto
  @typeorm.Column()
  eventTime: Timestamp

  @typeorm.Column()
  identifiedBy: string

  @typeorm.Column()
  identificationID: string

  @typeorm.CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string

  @typeorm.UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', update: true })
  updatedAt: string
}
