import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CuentasModel} from "../models/cuentas-model";

@Injectable({
  providedIn: 'root'
})
export class CuentasSharedService {
  private cuentasSource = new BehaviorSubject<CuentasModel[]>([]);
  cuentas$ = this.cuentasSource.asObservable();

  constructor() { }

  setCuentas(cuentas: CuentasModel[]) {
    this.cuentasSource.next(cuentas);
  }

  filtrarCuentasPorNombre(nombre: string) {
    const cuentas = this.cuentasSource.getValue();
    if (!nombre || nombre === '') {
      this.cuentasSource.next(cuentas);
    } else {
      const cuentasFiltradas = cuentas.filter(cuenta => cuenta.titular?.nombres?.toLowerCase().includes(nombre.toLowerCase()));
      console.log("el nombre "+ nombre)
      this.cuentasSource.next(cuentasFiltradas);
    }
  }
}
