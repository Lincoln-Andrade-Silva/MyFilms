import { Component, OnInit } from '@angular/core';
import { sortBy } from 'lodash';
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
  filter: string = 'id';

  colunas: string[] = ['Id', 'Comprador', 'Itens', 'Total', 'Acao']

  constructor(private service: PedidosService) {
    this.pedidos = [];
  }

  ngOnInit(): void {
    this.getList();
    console.log(this.filter)
  }

  getList() {
    this.service.listar()
      .subscribe(pedidos => {
        this.pedidos = pedidos;
        this.filterBy();
      })
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.getList();
  }

  filterBy() {
    if (this.filter === 'totalcres') {
      this.pedidos.sort(function (x, y) {
        return y.total - x.total
      })
    }
    if (this.filter === 'totaldec') {
      this.pedidos.sort(function (x, y) {
        return x.total - y.total
      })
    } else {
      return
    }
  }

  setSearchcat(categoria: string) {
    this.searchcat = categoria;
  }

  excluir(id: number) {
    this.service.excluir(String(id)).subscribe(() => {
      this.getList();
    });
  }

  saveId(number: any) {
    this.pedidoId = number
    return this.pedidoId;
  }

}
