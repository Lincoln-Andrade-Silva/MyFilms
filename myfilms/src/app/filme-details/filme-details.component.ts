import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.scss']
})
export class FilmeDetailsComponent implements OnInit {

  filme: Filme = new Filme();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(String(id)).subscribe(filme => {
      this.filme = filme;
    })
  }

  constructor(private service: FilmesService,
    private router: Router,
    private route: ActivatedRoute) {
  }

}
