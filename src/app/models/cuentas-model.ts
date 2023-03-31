import {TitularesModel} from "./titulares-model";

export class CuentasModel {
  id? : number;
  titular?: TitularesModel;
  banco?: string;
  cbu?: string;
  alias?: string;
  sucursal?: string;
  nroCuenta?: string;

  constructor(){
  }
}
