import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponse} from "../models/responses/loginResponse";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
  private baseUrl = environment.urlAPI;
  private createUrl = `${this.baseUrl}/usuarios`;
  private updateUrl = `${this.baseUrl}/auth/login`;
  private deleteUrl = `${this.baseUrl}/auth/login`;
  constructor(private http: HttpClient) { }
  create(usuario: string, password: string, mail:string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.createUrl, {usuario, password, mail});
  }
}
