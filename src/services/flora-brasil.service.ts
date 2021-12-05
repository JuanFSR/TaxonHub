import * as request from 'request';
export class FloraBrasilService {
    constructor() {}

    consultTaxonomicData(speciesName: string) : void {
        console.log('Searching Taxonomic Data');
        
        // API is not working
        request.get('http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, 
        (error:any, response :any, body:any) => {
            console.log(body);
            return body;
        })
    }

}