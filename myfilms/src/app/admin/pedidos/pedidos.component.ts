import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/models/Pedido';
import { PedidosService } from 'src/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];
  search: string = '';
  searchcat: string = 'Todos';
  field: string = 'Comprador';
  deleteConfirm = false;
  pedidoId = 0;

  colunas: string[] = ['Id', 'Comprador', 'Itens', 'Total', 'Acao']

  constructor(private service: PedidosService) {
    this.pedidos = [];
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.listar()
      .subscribe(pedidos => {
        this.pedidos = pedidos;
      })
  }

  setSearchcat(categoria: string) {
    this.searchcat = categoria;
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => {
      this.getList();
    });
  }

  saveId(number: any){
    this.pedidoId = number
    return this.pedidoId;
  }

}
