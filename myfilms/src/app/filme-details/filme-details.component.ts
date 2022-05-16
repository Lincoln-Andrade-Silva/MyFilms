import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { CarrinhoService } from 'src/services/carrinho.service';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.scss']
})
export class FilmeDetailsComponent implements OnInit {

  itensDoCarrinho: Observable<Filme[]> = new Observable<Filme[]>()
  filme: Filme = new Filme();
  addSucess = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(String(id)).subscribe(filme => {
      this.filme = filme;
    })
    this.itensDoCarrinho = this.service.listar();
  }

  constructor(private service: FilmesService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute) { }

  adicionarAoCarrinhoAluguel(filme: Filme) {
    this.filme.preco = this.filme.preco_aluguel;
    this.filme.tipo = 'Aluguel';
    this.carrinhoService.incrementarUmItem(filme);
  }

  adicionarAoCarrinhoCompra(filme: Filme) {
    this.filme.preco = this.filme.preco_fixo;
    this.filme.tipo = 'Compra';
    this.carrinhoService.incrementarUmItem(filme);
  }


}