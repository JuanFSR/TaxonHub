import * as typeorm from 'typeorm'
import { synonymsDTO } from './synonymsDTO'

@typeorm.Entity()
@typeorm.Unique(['id'])

export class FloraResponseDTO {
    @typeorm.PrimaryGeneratedColumn('uuid')
    id: string

    // Most common scientific name
    @typeorm.Column()
    scientificname: string
    
    // An array of synonyms to the same species
    @typeorm.Column()
    synonymsList: Array<synonymsDTO>
}