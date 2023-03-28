import { Component, ViewChild } from '@angular/core';
import { CardsContainerComponent } from 'src/app/components/home/home-container/cards-container/cards-container.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.css',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild(CardsContainerComponent) cardsComponent!: CardsContainerComponent;

  buscarCuentas(): void {
    const nombre = this.cardsComponent.buscarCuenta.trim();
    this.cardsComponent.filtrarCuentasPorNombre(nombre);
  }
}
