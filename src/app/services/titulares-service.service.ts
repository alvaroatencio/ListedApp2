import { Injectable } from '@angular/core';
import {TitularesModel} from "../models/titulares-model";
import {environment} from "../../enviroments/enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitularesServiceService {
  private apiUrl = environment.urlAPI;
  private endpoint = '/titulares';
  private token = sessionStorage.getItem('token') ?? '';
  private headers = new HttpHeaders().set('Authorization','Bearer '+ this.token);

  constructor(private http: HttpClient) { }

  createTitular(titular: TitularesModel): Observable<TitularesModel> {
    return this.http.post<TitularesModel>(this.apiUrl+this.endpoint, titular, { headers: this.headers });
  }

  getTitularById(id: number): Observable<TitularesModel> {
    return this.http.get<TitularesModel>(`${this.apiUrl}${this.endpoint}/${id}`, { headers: this.headers });
  }
}
