import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
  pedidos: Pedido[];


  URL = "http://localhost:3001/pedidos";

  constructor(private http: HttpClient) {
    this.pedidos = [];
  }

  buscarPorId(id: string): Observable<Pedido> {
    return this.http.get<Pedido>(this.URL + "/" + id);
  }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.URL);
  }

  incluir(pedidos: Pedido): Observable<any> {
    return this.http.post<any>(this.URL, pedidos);
  }

  atualizar(pedidos: Pedido): Observable<any> {
    const path = `${this.URL}/${pedidos.id}`
    return this.http.put<Pedido>(path, pedidos);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }

}
