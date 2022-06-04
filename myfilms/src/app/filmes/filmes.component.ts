import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/services/filmes.service';
import { Filme } from 'src/models/Filme';

@Component({
  selector: 'app-home',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];
  grupos: any = [];
  search: string = '';
  searchcat: string = 'Todos';
  field: string = 'Nome';
  keyword: string = 'nome'

  constructor(private service: FilmesService) {
    this.filmes = [];
  }

  setSearchcat(categoria: string) {
    this.searchcat = categoria;
  }

  ngOnInit(): void {
    this.list()
  }

  list() {
    this.service.listar()
      .subscribe(filmes => {
        this.grupos = this.service.group_by(filmes, "categoria");
      })
  }

  truncate(str: string | undefined) {
    if (str) {
      return str.length > 20 ? str.substring(0, 180) + '...' : str;
    } else { return str }
  }
}