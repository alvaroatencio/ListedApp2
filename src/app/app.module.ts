import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeContainerComponent} from './components/home/home-container/home-container.component';
import {CardsContainerComponent} from './components/home/home-container/cards-container/cards-container.component';
import {
  CardCuentasComponent
} from './components/home/home-container/cards-container/card-cuentas/card-cuentas.component';
import {LandingComponent} from './components/landing/landing.component';
import {UsersContainerComponent} from './components/landing/users-container/users-container.component';
import {LoginFormComponent} from './components/landing/users-container/login-form/login-form.component';
import {ManageSectionComponent} from './components/landing/users-container/manage-section/manage-section.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PanelComponent} from './components/profile/panel/panel.component';
import {SharedComponent} from './components/shared/shared.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NavComponent} from './components/shared/nav/nav.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from "./components/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ContactoModule} from "./components/shared/footer/contacto/contacto.module";
import { CuentasFormComponent } from './components/home/home-container/cuentas-form/cuentas-form.component';
import { NuevoUsuarioFormComponent } from './components/landing/users-container/manage-section/nuevo-usuario-form/nuevo-usuario-form.component';
import {BsModalService} from "ngx-bootstrap/modal";


@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    CardsContainerComponent,
    CardCuentasComponent,
    LandingComponent,
    UsersContainerComponent,
    LoginFormComponent,
    ManageSectionComponent,
    ProfileComponent,
    PanelComponent,
    SharedComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CuentasFormComponent,
    NuevoUsuarioFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    ContactoModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
