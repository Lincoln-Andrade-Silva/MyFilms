import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/services/filmes.service';
import { Filme } from 'src/models/Filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  filmes: Filme[];
  grupos: any = [];
  search: string = '';
  searchcat: string = 'Todos';
  field: string = 'Nome';
  keyword: string = 'nome'

  constructor(private service: FilmesService) {
    this.filmes = [];
  }

  setSearchcat(categoria: string){
    this.searchcat = categoria;
  }

  group_by(lista: any[], coluna: string) {
    var colunas: any = {};
    var resultado: any = [];

    lista.forEach(function (item) {
      var reg: any = {};

      colunas[item[coluna]] = colunas[item[coluna]] || [];

      for (var i in item)
        if (i != coluna)
          reg[i] = item[i];

      colunas[item[coluna]].push(reg);
    });

    for (var i in colunas)
      resultado.push({ key: i, values: colunas[i] });

    return resultado;
  }
  
  ngOnInit(): void {
    this.service.listar()
      .subscribe(filmes => {
        this.grupos =  this.group_by(filmes, "categoria");
      })
  }

  truncate(str: string | undefined) {
    if (str) {
      return str.length > 20 ? str.substring(0, 200) + '...' : str;
    } else { return str }
  }
}