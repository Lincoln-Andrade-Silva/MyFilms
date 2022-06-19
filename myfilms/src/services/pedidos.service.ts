import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/models/Pedido';
import { genericCRUD } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService extends genericCRUD<Pedido> {
  
  constructor(protected override http: HttpClient) {
    super(http, "http://localhost:3001/pedidos");
   }

}
