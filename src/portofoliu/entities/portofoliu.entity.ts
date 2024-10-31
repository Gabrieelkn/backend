// or another appropriate type

export class Portofoliu {
  id: number;
  titlu: string;
  descriere: string;
  imagine: string; // Store the file path as a string
  linkClient: string;
  status: 'ascuns' | 'afisat';

  constructor(
    id: number,
    titlu: string,
    descriere: string,
    imagine: string, // Here, we change to string to store the file path
    linkClient: string,
    status: 'ascuns' | 'afisat',
  ) {
    this.id = id;
    this.titlu = titlu;
    this.descriere = descriere;
    this.imagine = imagine; // This will be a file path
    this.linkClient = linkClient;
    this.status = status;
  }
}
