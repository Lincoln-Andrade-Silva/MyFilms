import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { CarrinhoService, ItemDataSource } from 'src/services/carrinho.service';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  displayedColumns: string[] = [' ', 'Nome', 'Tipo', 'Valor-uni', 'SubTotal', 'Quantidade']

  isCarrinhoVazio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  valorTotalDoPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  itensDoCarrinho: ItemDataSource = new ItemDataSource();


  constructor(private carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.fonteDeDados;
    this.valorTotalDoPedido = this.carrinhoService.valorTotalDoPedido;
    this.isCarrinhoVazio = this.carrinhoService.isCarrinhoVazio;
  }

  getSubtotal(filme: Filme) {
    return filme.preco * filme.quantidade;
  }

  atualizarItem(filme: Filme) {
    this.carrinhoService.atualizarItem(filme);
  }

  limpar(){
    this.carrinhoService.limpar();
  }

  formatar(valor: BehaviorSubject<number>) {
    const conversor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }
}
