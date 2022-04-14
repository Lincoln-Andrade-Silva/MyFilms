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
  search: string = 'All';
  field: string = 'Categoria';

  constructor(private service: FilmesService) {
    this.filmes = [];
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
        this.filmes = filmes;
        filmes =  this.group_by(filmes, "categoria")
        console.log(filmes)
      })
  }

  truncate(str: string | undefined) {
    if (str) {
      return str.length > 20 ? str.substring(0, 200) + '...' : str;
    } else { return str }
  }
}