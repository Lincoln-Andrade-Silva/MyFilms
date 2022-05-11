import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { ItemCarrinho } from 'src/models/ItemCarrinho';
import { CarrinhoService } from 'src/services/carrinho.service';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.scss']
})
export class FilmeDetailsComponent implements OnInit {

  filme: Filme = new Filme();
  itemCarrinho: ItemCarrinho = new ItemCarrinho();
  addSucess = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(String(id)).subscribe(filme => {
      this.filme = filme;
    })
  }

  constructor(private service: FilmesService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
    private router: Router) { }

  adicionarAoCarrinhoAluguel(filme: Filme) {
    filme.preco = this.filme.preco_aluguel;
    filme.tipo = 'Aluguel';
    this.itemCarrinho.filmes = filme;
    this.carrinhoService.incluir(this.itemCarrinho).subscribe();
  }

  adicionarAoCarrinhoCompra(filme: Filme) {
    filme.preco = this.filme.preco_fixo;
    filme.tipo = 'Compra';
    this.itemCarrinho.filmes = filme;
    this.carrinhoService.incluir(this.itemCarrinho).subscribe();
  }


}
