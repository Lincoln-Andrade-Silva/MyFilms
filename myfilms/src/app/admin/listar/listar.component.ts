import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  
  filmes: Filme[];
  filme: any;
  grupos: any = [];
  search: string = '';
  searchcat: string = 'Todos';
  field: string = 'Nome';
  keyword: string = 'nome'

  colunas: string[] = ['Nome', 'Aluguel', 'Compra', 'Acao']

  constructor(private service: FilmesService, private router: Router) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.service.listar()
      .subscribe(filmes => {
        this.grupos = this.service.group_by(filmes, "categoria");
      })
  }

  setSearchcat(categoria: string){
    this.searchcat = categoria;
  }

}
