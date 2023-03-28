import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { CardsContainerComponent } from './components/home/home-container/cards-container/cards-container.component';
import { CardCuentasComponent } from './components/home/home-container/cards-container/card-cuentas/card-cuentas.component';
import { LandingComponent } from './components/landing/landing.component';
import { UsersContainerComponent } from './components/landing/users-container/users-container.component';
import { LoginFormComponent } from './components/landing/users-container/login-form/login-form.component';
import { ManageSectionComponent } from './components/landing/users-container/manage-section/manage-section.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PanelComponent } from './components/profile/panel/panel.component';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';

import {RouterModule, RouterOutlet} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from "./components/home/home.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";

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
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
