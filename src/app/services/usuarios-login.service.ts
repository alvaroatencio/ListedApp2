// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import {LoginResponse} from "../models/responses/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class UsuariosLoginService {

  private baseUrl = environment.urlAPI;
  private loginUrl = `${this.baseUrl}/auth/login`;

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, { usuario, password });
  }
}
