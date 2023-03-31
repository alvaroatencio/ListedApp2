import {Component, OnInit} from '@angular/core';
import {CuentasService} from "../../../../services/cuentas-service.service";
import {CuentasModel} from "../../../../models/cuentas-model";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{
  cuentas: CuentasModel[] = [];
  cuentasFiltradas: CuentasModel[] = [];
  buscarCuenta: string = "";

  constructor(private cuentasService: CuentasService) {
    this.cuentasFiltradas = [];
  }
  ngOnInit(): void {
    this.traerCuentas();
    this.filtrarCuentasPorNombre(this.buscarCuenta);
  }
  traerCuentas(): void {
    this.cuentasService.getCuentas().subscribe(
      (cuentas: CuentasModel[]) => {
        this.cuentas = cuentas;
        this.filtrarCuentasPorNombre(this.buscarCuenta);
      },
      error => {
        console.log('Ha ocurrido un error');
        console.log(error);
      }
    );
  }
  filtrarCuentasPorNombre(nombre: string) {
    if (nombre) {
      this.cuentasFiltradas = this.cuentas.filter((cuenta: CuentasModel) =>
        cuenta.titular.nombres.toLowerCase().includes(nombre.toLowerCase())
      );
    } else {
      this.cuentasFiltradas = this.cuentas;
    }
  }
}
