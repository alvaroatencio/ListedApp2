import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CuentasFormComponent} from "../../../home/home-container/cuentas-form/cuentas-form.component";
import {NuevoUsuarioFormComponent} from "./nuevo-usuario-form/nuevo-usuario-form.component";
@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.css']
})
export class ManageSectionComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {
  }
  crearUsuario(){
    this.bsModalRef = this.modalService.show(NuevoUsuarioFormComponent);
    this.bsModalRef.onHidden?.subscribe(() => {
      console.log('El modal se cerró');
      // Aquí puedes realizar las acciones necesarias
    });
  }
  validarForm(){
    console.log("validando form")
  }
}
