import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { UsuariosLoginService } from 'src/app/services/usuarios-login.service';
import { LoginResponse } from 'src/app/models/responses/loginResponse';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: string="";
  password: string="";
  rememberMe: boolean=false;
  showPassword: boolean=false;
  errorMessageUser: string="Ingrese su usuario o email";
  errorMessagePass: string="Debe ingresar su contraseña";
  constructor(private usuariosLoginService: UsuariosLoginService, private router : Router) {
    this.showPassword = false;
  }
  ingresar() {
    console.log(this.user + "  "+this.password)
    this.
    usuariosLoginService.
    login(this.user,this.password).subscribe(
      (response: LoginResponse) => {
          sessionStorage.setItem("token", response.token);
          this.router.navigate(['/home']).then();
      },
      error => {
        console.log('Ha ocurrido un error');
        console.log(error);
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateEmail() {

  }
}
