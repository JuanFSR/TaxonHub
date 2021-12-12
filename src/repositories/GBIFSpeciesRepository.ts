import { getRepository } from 'typeorm'
import { GBIFSpeciesEntity } from '../entities/GBIFSpeciesEntity'

export const GBIFSpeciesRepository = getRepository(GBIFSpeciesEntity)
