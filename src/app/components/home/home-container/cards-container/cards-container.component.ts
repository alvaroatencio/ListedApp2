import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CuentasService} from "../../../../services/cuentas-service.service";
import {CuentasModel} from "../../../../models/cuentas-model";
import {FiltroCuentasService} from "../../../../services/filtro-cuentas.service";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{
  cuentas: CuentasModel[] = [];
  cuentasFiltradas: CuentasModel[] = [];
  buscarCuenta: string = "";
  cuentaSeleccionada?: CuentasModel | null;
  cuentaMarcada = false;

  constructor(private cuentasService: CuentasService, private filtroService: FiltroCuentasService) {
    this.cuentasFiltradas = [];
  }

  ngOnInit(): void {
    this.traerCuentas();
    this.filtrarCuentasPorNombre(this.buscarCuenta);
    this.filtroService.filtro$.subscribe(filtro => {
      this.filtrarCuentasPorNombre(filtro);
    });
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
    this.buscarCuenta = nombre;
    this.cuentasFiltradas = this.cuentas.filter(cuenta => cuenta.titular?.nombres?.toLowerCase().includes(nombre));
    console.log("elnombre "+nombre)
  }

  mostrar(dato:string) {
    console.log("sale "+dato)
  }

  public seleccionarCuenta(cuenta: CuentasModel): void {
    if (this.cuentaSeleccionada === cuenta) {
      this.cuentaSeleccionada = null;
      this.cuentaMarcada = false;
    } else {
      this.cuentaSeleccionada = cuenta;
      this.cuentaMarcada = true;
    }
    console.log('Cuenta seleccionada:', cuenta);
  }
  copiarCuenta() {
    const cuentaTexto = `
    Titular: ${this.cuentaSeleccionada?.titular?.nombres}\n
    Banco: ${this.cuentaSeleccionada?.banco}\n
    Sucursal: ${this.cuentaSeleccionada?.sucursal}\n
    Número de cuenta: ${this.cuentaSeleccionada?.nroCuenta}\n
    Alias: ${this.cuentaSeleccionada?.alias}\n
    CBU: ${this.cuentaSeleccionada?.cbu}`;
    navigator.clipboard.writeText(cuentaTexto);
  }
}
