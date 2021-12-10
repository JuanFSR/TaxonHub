import axios from 'axios';

export async function consultTaxonomicData(speciesName:string) {
    try {
        let res = await axios({
            method: 'get',
            url: 'http://servicos.jbrj.gov.br/flora/taxon/' + speciesName,
        });

        return res;
    } catch (err:any) {
        console.log(`API erro message: ` + err.response.statusText +`:`+ err.response.status );
        return err.response.status;
        
    }
}

export async function taxonCleanData(speciesName: string) {
    try {
        const taxonData = await consultTaxonomicData(speciesName);
        if (taxonData != '404') {
            let data = taxonData.result;
            console.log(data);
        }
    }catch(err: any ) {

        throw new Error(err);
    }
}