import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactoComponent } from './contacto.component';

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ContactoComponent
  ]
})
export class ContactoModule { }
