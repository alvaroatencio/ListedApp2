export class TitularesModel {
  id : number;
  nombres: string;
  cuit: string;
  email1: string;
  email2: string;
  constructor(id: number, nombres: string, cuit: string, email1: string, email2: string) {
    this.id = id;
    this.nombres = nombres;
    this.cuit = cuit;
    this.email1 = email1;
    this.email2 = email2;
  }
}
