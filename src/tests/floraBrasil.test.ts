import { consultTaxonomicData } from "../services/flora-brasil.service";

const { throws } = require("assert");
const { taxonCleanData } = require("../services/flora-brasil.service");

// Example of a response from the Flora do Brasil API
let speciesDataTeste = {
    values: [
        {
            scientificname: 'Tabernaemontana flavicans Willd. ex Roem. & Schult.',
            synonymsList:
                [
                    {
                        "taxonid": "40869",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia flavicans (Willd. ex Roem. & Schult.) Miers",
                        "specificepithet": "flavicans",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Willd. ex Roem. & Schult.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia flavicans (Willd. ex Roem. & Schult.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40869\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40869</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40869"
                    },
                    {
                        "taxonid": "40872",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia oblongifolia (A.DC.) Markgr.",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(A.DC.) Markgr.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia oblongifolia (A.DC.) Markgr.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40872\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40872</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40872"
                    },
                    {
                        "taxonid": "40870",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia glabrata Miers",
                        "specificepithet": "glabrata",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia glabrata Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40870\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40870</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40870"
                    },
                    {
                        "taxonid": "41045",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia latiflora Miers",
                        "specificepithet": "latiflora",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia latiflora Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41045\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41045</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41045"
                    },
                    {
                        "taxonid": "41054",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia oblongifolia (A.DC.) Miers",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(A.DC.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia oblongifolia (A.DC.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41054\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41054</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41054"
                    },
                    {
                        "taxonid": "41055",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia olivacea (Müll.Arg.) Miers",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Müll.Arg.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia olivacea (Müll.Arg.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41055\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41055</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41055"
                    },
                    {
                        "taxonid": "41959",
                        "family": "Apocynaceae",
                        "genus": "Taberna",
                        "scientificname": "Taberna disparifolia Miers",
                        "specificepithet": "disparifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Taberna Miers;Taberna disparifolia Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41959\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41959</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41959"
                    },
                    {
                        "taxonid": "42024",
                        "family": "Apocynaceae",
                        "genus": "Tabernaemontana",
                        "scientificname": "Tabernaemontana oblongifolia A.DC.",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "A.DC.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Tabernaemontana L.;Tabernaemontana oblongifolia A.DC.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42024\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42024</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB42024"
                    },
                    {
                        "taxonid": "42026",
                        "family": "Apocynaceae",
                        "genus": "Tabernaemontana",
                        "scientificname": "Tabernaemontana olivacea Müll.Arg.",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Müll.Arg.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Tabernaemontana L.;Tabernaemontana olivacea Müll.Arg.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42026\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42026</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB42026"
                    },
                    {
                        "taxonid": "40873",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia olivacea (Müll.Arg.) Markgr.",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Müll.Arg.) Markgr.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia olivacea (Müll.Arg.) Markgr.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40873\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40873</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40873"
                    }
                ],
        }
    ],
}

// Not found code
let notFoundCode: number = 404;


// Mock API to execute tests
async function mockConsultTaxonomicData(speciesName: any) {
    if (speciesName == null) {
    return null;
    }
    try {
        if (speciesName == 'Tabernaemontana flavicans Willd. ex Roem. & Schult.') {
            return speciesDataTeste;
        }
        return notFoundCode;
    } catch {
        throw new Error('Species name not found');
    }
}

// Auxiliar variables
let statusCode: any;
let responseApi: any;

// Tests
describe('Illustrate FDB mocks', () => {

    test('Test api connection', async () => {
        statusCode = await consultTaxonomicData('Tabernaemontana flavicans Willd. ex Roem. & Schult.')
        expect(statusCode).toBe(200)
    })
    
    test('Searching an existing specie', async () => {
        responseApi = await mockConsultTaxonomicData('Tabernaemontana flavicans Willd. ex Roem. & Schult.')
        expect(responseApi).toStrictEqual(speciesDataTeste)
    })
    
    test('Searching a not existing specie', async () => {
        responseApi = await mockConsultTaxonomicData('Flavicans. ex Roem. & Schult.')
        expect(responseApi).toStrictEqual(404)
    })

    test('Searching a not existing specie', async () => {
        responseApi = await mockConsultTaxonomicData('')
        expect(responseApi).toStrictEqual(404)
    })

    test('Searching a not existing specie', async () => {
        responseApi = await mockConsultTaxonomicData('69')
        expect(responseApi).toStrictEqual(404)
    })

})