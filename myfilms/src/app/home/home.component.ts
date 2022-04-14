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
  field: string = 'categoria';

  constructor(private service: FilmesService) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.service.listar()
      .subscribe(filmes => {
        this.filmes = filmes
      })
  }
 
  truncate(str: string | undefined) {
    if (str) {
      return str.length > 20 ? str.substring(0, 200) + '...' : str;
    } else { return str }
  }
}