import {TitularesModel} from "./titulares-model";

export class CuentasModel {
  id : number;
  titular: TitularesModel;
  banco: string;
  cbu: string;
  alias: string;
  sucursal: string;
  nroCuenta: string;

  constructor(id : number, titular: TitularesModel, banco: string, cbu: string, alias: string, sucursal: string, nroCuenta: string) {
    this.id =id;
    this.titular = titular;
    this.banco = banco;
    this.cbu = cbu;
    this.alias = alias;
    this.sucursal = sucursal;
    this.nroCuenta = nroCuenta;
  }
}
