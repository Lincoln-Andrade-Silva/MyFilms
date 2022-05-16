import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { ItemCarrinho } from 'src/models/ItemCarrinho';
import { CarrinhoService, ItemDataSource } from 'src/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  deleteConfirm = false;
  filme: Filme = new Filme();

  constructor(private carrinhoService: CarrinhoService) {
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
    console.log(this.itensDoCarrinho);
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
