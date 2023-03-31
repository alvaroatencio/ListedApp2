import {Component} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

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

  constructor() {
  }
  crear() {

  }

  validateTitular() {

  }

  validateEmail1() {

  }

  validateCuit() {

  }
}
