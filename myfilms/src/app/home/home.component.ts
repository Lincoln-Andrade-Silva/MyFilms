import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/services/filmes.service';
import { Filme } from 'src/models/Filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  filmes : Filme[];
  colunas: string[] = ['id', 'nome', 'desc', 'foto'];

  constructor(private service : FilmesService) {
    this.filmes = [];
   }

  ngOnInit(): void {
    this.service.listar().subscribe(filmes => {
      console.log(filmes);
      this.filmes = filmes;
    });

  }

}

