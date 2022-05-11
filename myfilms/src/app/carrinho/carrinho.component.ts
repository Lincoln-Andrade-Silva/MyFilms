import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrinho } from 'src/models/ItemCarrinho';
import { CarrinhoService } from 'src/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ItemCarrinho[];
  deleteConfirm = false;
  itemId: number = 0;

  constructor(private carrinhoService: CarrinhoService, private router: Router) {
    this.itensCarrinho = [];
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.carrinhoService.listar()
      .subscribe(itensCarrinho => {
        this.itensCarrinho = itensCarrinho;
      })
  }

  excluir(id: number) {
    this.carrinhoService.excluir(id).subscribe(() => {
      this.getList();
    });
  }

  formatar(valor: BehaviorSubject<number>) {
    const conversor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }

  saveId(id: number){
    this.itemId = id;
    return this.itemId;
  }
}
