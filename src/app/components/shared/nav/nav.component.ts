import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosLoginService} from "../../../services/usuarios-login.service";
import {CardCuentasComponent} from "../../home/home-container/cards-container/card-cuentas/card-cuentas.component";
import {CardsContainerComponent} from "../../home/home-container/cards-container/cards-container.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  buscarCuentasBar="";
  constructor(private usuariosLoginService: UsuariosLoginService, private router: Router) {
  }
  onLogout() {
    this.usuariosLoginService.logout();
    this.router.navigate(['/landing']);
  }
  @ViewChild(CardsContainerComponent) cardsComponent!: CardsContainerComponent;
  buscarCuentas(): void {
    const nombre = this.buscarCuentasBar.trim();
    this.cardsComponent.filtrarCuentasPorNombre(nombre);
  }
}
