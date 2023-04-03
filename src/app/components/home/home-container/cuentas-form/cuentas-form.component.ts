import {Component} from '@angular/core';
import {CuentasService} from "../../../../services/cuentas-service.service";
import {CuentasModel} from "../../../../models/cuentas-model";
import {TitularesModel} from "../../../../models/titulares-model";
import {TitularesServiceService} from "../../../../services/titulares-service.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {CardsContainerComponent} from "../cards-container/cards-container.component";

@Component({
  selector: 'app-cuentas-form',
  templateUrl: './cuentas-form.component.html',
  styleUrls: ['./cuentas-form.component.css']
})
export class CuentasFormComponent {
  nombres:string="";
  errorMessageTitular:string="";
  mail1:string="";
  nroCta:string="";
  cuit:string="";
  sucursal:string="";
  CBU:string="";
  banco:string="";
  alias:string="";
  private titularBuscado?: TitularesModel;

  constructor(public cuentasService: CuentasService, public titularesService: TitularesServiceService, public router:Router, private cardsContainer: CardsContainerComponent) {
  }
  crear() {
    console.log("sale")
    const nuevoTitular = new TitularesModel();
    nuevoTitular.nombres = this.nombres;
    nuevoTitular.cuit=this.cuit;
    nuevoTitular.email1=this.cuit;
    nuevoTitular.email2="";
    this.titularesService.createTitular(nuevoTitular).subscribe(
    (response: TitularesModel) => {
      nuevoTitular.id=response.id;
      const nuevaCuenta = new CuentasModel();
      nuevaCuenta.titular = response;
      nuevaCuenta.banco = this.banco;
      nuevaCuenta.sucursal = this.sucursal;
      nuevaCuenta.nroCuenta = this.nroCta;
      nuevaCuenta.alias = this.alias;
      nuevaCuenta.cbu = this.CBU;
      this.cuentasService.createCuentas(nuevaCuenta).subscribe(
        (response: CuentasModel) => {
          Swal.fire({
            icon: 'success',
            title: 'Tu cuenta se creó con exito',
            showConfirmButton: false,
            timer: 1500
          });
          this.cardsContainer.ngOnInit();
        }
      )
    },
    (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message,
      });
  });
  }

  validateTitular() {

  }

  validateEmail1() {

  }

  validateCuit() {

  }
}
