import { consultTaxonomicData, taxonCleanData } from './services/flora-brasil.service'

let nameSpecies: string = 'Eichhornia%20azurea';

// Execute request to the Flora do Brasil API
consultTaxonomicData(nameSpecies);
console.log('Running')
