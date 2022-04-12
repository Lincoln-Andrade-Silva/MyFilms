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

  constructor(private service: FilmesService) {
    this.filmes = [];

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

  ngOnInit(): void {
    this.service.listar().subscribe(filmes => {
      console.log(filmes);
      this.filmes = filmes;
    });
  }

  truncate(str: string | undefined) {
    if (str) {
      return str.length > 20 ? str.substring(0, 160) + '...' : str;
    } else { return }
  }
}