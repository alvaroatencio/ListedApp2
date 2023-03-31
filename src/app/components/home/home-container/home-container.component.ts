import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {
  NuevoUsuarioFormComponent
} from "../../landing/users-container/manage-section/nuevo-usuario-form/nuevo-usuario-form.component";
import {CuentasFormComponent} from "./cuentas-form/cuentas-form.component";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {
  constructor() {
  }

  abrirFormulario() {

  }
}
