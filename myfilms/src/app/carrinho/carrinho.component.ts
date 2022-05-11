import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoService } from 'src/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
  
  }

  formatar(valor: BehaviorSubject<number>) {
    const conversor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }
}
