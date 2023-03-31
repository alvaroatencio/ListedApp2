import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroCuentasService {
  private _filtro = new BehaviorSubject<string>('');
  public filtro$ = this._filtro.asObservable();

  actualizarFiltro(filtro: string) {
    this._filtro.next(filtro);
  }
}
