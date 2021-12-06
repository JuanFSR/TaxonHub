export class FloraResponse {
    name: string;
    nameAuthor: string;

    constructor(floraResponse: any) {
        this.name = floraResponse.name;
        this.nameAuthor = floraResponse.nameAuthor;
    }
}