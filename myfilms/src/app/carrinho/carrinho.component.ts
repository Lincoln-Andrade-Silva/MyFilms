import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { Pedido } from 'src/models/Pedido';
import { CarrinhoService, ItemDataSource } from 'src/services/carrinho.service';
import { PedidosService } from 'src/services/pedidos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  deleteConfirm = false;
  filme: Filme = new Filme();

  constructor(private carrinhoService: CarrinhoService, private pedidoService: PedidosService) {
  }

  isCarrinhoVazio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  valorTotalDoPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  itensDoCarrinho: ItemDataSource = new ItemDataSource();
  displayedColumns: string[] = ['Photo', 'Nome', 'Type', 'Price', 'Remove']

  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.fonteDeDados;
    this.valorTotalDoPedido = this.carrinhoService.valorTotalDoPedido;
    this.isCarrinhoVazio = this.carrinhoService.isCarrinhoVazio;
  }

  limpar(){
    this.carrinhoService.limpar();
  }

  excluir(){
    this.carrinhoService.removerItem(this.filme)
  }

  saveFilme(filme: Filme){
    this.filme = filme
  }

  addPedido() {
    const pedido = new Pedido();
    pedido.itens = this.carrinhoService.getItens();
    const total = this.carrinhoService.valorTotalDoPedido.value;
    pedido.total = Number(total.toFixed(2));
    pedido.comprador = 'admin';
    this.pedidoService.incluir(pedido).subscribe(() => {
        this.carrinhoService.limpar();
      });
  }

  formatar(valor: BehaviorSubject<number>) {
    const conversor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }

  truncate(str: string | undefined) {
    if (str) {
      return str.substring(0, 16) + '...';
    } else { return str }
  }

}
