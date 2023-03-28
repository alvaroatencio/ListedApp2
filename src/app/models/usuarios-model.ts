export class UsuariosModel {
  id:number;
  usuario:string;
  mail:string;
  password:string;

  constructor(id: number, usuario: string, mail: string, password: string) {
    this.id = id;
    this.usuario = usuario;
    this.mail = mail;
    this.password = password;
  }
}
