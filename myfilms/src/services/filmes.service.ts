import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { genericCRUD } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class FilmesService extends genericCRUD<Filme> {

  constructor(protected override http: HttpClient) {
    super(http, "http://localhost:3001/filmes");
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
}
