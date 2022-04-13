import { Component, OnInit, ViewChild } from '@angular/core';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  filmes: Filme[];
  displayedColumns: string[] = [' ', 'Nome', 'Categoria', 'Preço', 'Total']

  constructor(private service: FilmesService) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(filmes => {
      console.log(filmes);
      this.filmes = filmes;
    });
  }

}
