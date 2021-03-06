import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class genericCRUD<T> {
  
  constructor(protected http: HttpClient, private url: string) { }


  listar() : Observable<T[]> {

    let response = this.http.get<T[]>(this.url);

    return response;

  }


  buscarPorId(id : string) : Observable<T> {

    const path = `${this.url}/${id}`;

    return this.http.get<T>(path);

  }


  incluir(tipo : T) : Observable<any> {

    return this.http.post<T>(this.url, tipo);

  }


  atualizar(id: string, tipo : T) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.put<T>(path, tipo);

  }


  excluir(id? : string) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.delete<T>(path);

  }

}
