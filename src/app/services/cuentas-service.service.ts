import { Injectable } from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CuentasModel} from "../models/cuentas-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  private apiUrl = environment.urlAPI;
  private endpoint = '/cuentas';
  private token = sessionStorage.getItem('token') ?? '';
  private headers = new HttpHeaders().set('Authorization','Bearer '+ this.token);
  constructor(private http: HttpClient) { }
  getCuentas(): Observable<CuentasModel[]> {
    console.log("entra con token: "+this.token)
    return this.http.get<CuentasModel[]>(this.apiUrl+this.endpoint, { headers: this.headers });
  }
  createCuentas(form:CuentasModel):Observable<CuentasModel>
  {
    return this.http.post<CuentasModel>(this.apiUrl+this.endpoint,form,{ headers: this.headers});
  }
}
