import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes: Filme[];


  URL = "http://localhost:3001/filmes";

  constructor(private http: HttpClient) {
    this.filmes = [];
  }

  buscarPorId(id: string): Observable<Filme> {
    return this.http.get<Filme>(this.URL + "/" + id);
  }

  listar(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.URL);
  }

  incluir(filme: Filme): Observable<any> {
    return this.http.post<any>(this.URL, filme);
  }

  atualizar(filme: Filme): Observable<any> {
    const path = `${this.URL}/${filme.id}`
    return this.http.put<Filme>(path, filme);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
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
