import { FloraResponse } from "./floraResponse";

export class TaxonomicData {
    name: string;
    nameAuthor: string;
    binomialSynonymFlora: Array<FloraResponse>;

    constructor(floraBrasilResponse: any) {
        // Initializing object
        this.name = floraBrasilResponse.name;
        this.nameAuthor = floraBrasilResponse.nameAuthor;
        this.binomialSynonymFlora = new Array();
    }

}