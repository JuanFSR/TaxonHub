import * as request from 'request';
import { TaxonomicData } from '../taxonDataFloraBrasil';
export class FloraBrasilService {
    constructor() {}

    consultTaxonomicData(speciesName: string, callBack: (responseFlora: TaxonomicData) => any ) : void {
        console.log('Searching Taxonomic Data');
        
        // API is not working
        request.get('http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, 
        (error:any, response :any, body:any) => {
            let responseFlora = body;        
            callBack(responseFlora);
        })
    }

    /* Uncomment this part when the API is working 
    consultTaxonomicData(speciesName: string, callBack: (responseFlora: TaxonomicData) => any ) : void {
        console.log('Searching Taxonomic Data');
        
        // API is not working
        request.get('http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, 
        (error:any, response :any, body:any) => {
            let responseFlora = body;   
            let flora = new TaxonomicData(body);

            flora.binomialSynonymFlora =  body.bynomial.map((res: any) => {
                binomialSynonymFlora : res.synonBinomial.map((synonym: any) => {
                    flora.binomialSynonymFlora = synonym;
                })

            })
            callBack(responseFlora);
        })
    }*/

}