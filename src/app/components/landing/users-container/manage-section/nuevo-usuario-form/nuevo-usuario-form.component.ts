import {Component, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {LoginResponse} from "../../../../../models/responses/loginResponse";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {UsuariosServiceService} from "../../../../../services/usuarios-service.service";

@Component({
  selector: 'app-nuevo-usuario-form',
  templateUrl: './nuevo-usuario-form.component.html',
  styleUrls: ['./nuevo-usuario-form.component.css']
})
export class NuevoUsuarioFormComponent {
  user: any;
  errorMessageUser: string="Ingrese su usuario o email";
  errorMessagePass: string="Debe ingresar su contraseña";
  password: any;
  mail: any;
  showPassword: any;
  errorMessageMail: any;

  constructor(private usuariosServiceService: UsuariosServiceService,public bsModalRef: BsModalRef, private router : Router) {}

  closeModal() {
    this.bsModalRef.hide();
  }

  validateEmail() {

  }

  validateUsuario() {

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  crear() {
    this.
    usuariosServiceService.
    create(this.user,this.password,this.mail).subscribe(
      (response: LoginResponse) => {
        sessionStorage.setItem("token", response.token);
        this.closeModal()
        this.router.navigate(['/home']).then();
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      }
    );
  }
}
