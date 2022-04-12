import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes : Filme[];


  URL = "http://localhost:3001/filmes";

  constructor(private http: HttpClient) {
    this.filmes = [];
  } 

  buscarPorId(id: string): Observable<Filme>{
    return this.http.get<Filme>(this.URL + "/" + id);
  }

  listar(): Observable<Filme[]>{
    return this.http.get<Filme[]>(this.URL);
  }

  incluir(filme : Filme): Observable<any>{
    return this.http.post<any>(this.URL, filme);
  }

  atualizar(id: number, filme: Filme) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + id, filme);
  }

  excluir(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + "/" + id);
  }

  get groupedFilmes() {
    return Object.entries(
      this.filmes.reduce((filmes, filme) => {
          const categoria = filme.categoria;
          filmes[categoria] = filmes[categoria] ? [...filmes[categoria], filme] : [filme];
          return filmes
      }, {} as { [key: string]: Filme[] })
  )
  }

}
