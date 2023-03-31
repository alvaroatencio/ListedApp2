import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosLoginService} from "../../../services/usuarios-login.service";
import {CardsContainerComponent} from "../../home/home-container/cards-container/cards-container.component";
import {CuentasService} from "../../../services/cuentas-service.service";
import {CuentasModel} from "../../../models/cuentas-model";
import {CuentasSharedService} from "../../../services/cuentas-shared.service";
import {FiltroCuentasService} from "../../../services/filtro-cuentas.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  buscarCuentasBar="";

  constructor(private cuentasSharedService: CuentasSharedService, private usuariosLoginService: UsuariosLoginService, private router: Router,private filtroService: FiltroCuentasService) {
  }

  onLogout() {
    this.usuariosLoginService.logout();
    this.router.navigate(['/landing']);
  }

  buscarCuentas() {
    this.filtroService.actualizarFiltro(this.buscarCuentasBar);
  }
}
