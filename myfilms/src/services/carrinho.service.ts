import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemCarrinho } from 'src/models/ItemCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  
  itensDoCarrinho: ItemCarrinho[];


  URL = "http://localhost:3001/carrinho";

  constructor(private http: HttpClient) {
    this.itensDoCarrinho = [];
  }

  buscarPorId(id: string): Observable<ItemCarrinho> {
    return this.http.get<ItemCarrinho>(this.URL + "/" + id);
  }

  listar(): Observable<ItemCarrinho[]> {
    return this.http.get<ItemCarrinho[]>(this.URL);
  }

  incluir(itemCarrinho: ItemCarrinho): Observable<any> {
    return this.http.post<any>(this.URL, itemCarrinho);
  }

  atualizar(itemCarrinho: ItemCarrinho): Observable<any> {
    const path = `${this.URL}/${itemCarrinho.id}`
    return this.http.put<ItemCarrinho>(path, itemCarrinho);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}

