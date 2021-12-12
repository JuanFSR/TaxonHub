import axios from 'axios';

const sl_api = 'https://api.splink.org.br/records/ScientificName/'

export async function slData(species:string) {
    try {
        let res = await axios({
            method: 'get',
            url: sl_api + species,
        });
        return res.data;
    } catch (err:any) {
        console.log(`Error: ` + err.response.statusText +`:`+ err.response.status );
        return err.response.status;
    }
}