import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  filmes: Filme[];
  filme: Filme = new Filme();
  grupos: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private service: FilmesService) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(filmes => {
      this.grupos = this.service.group_by(filmes, "categoria");
    });
  }

  adicionarFilme() {
    this.service.incluir(this.filme).subscribe(() => {
      this.router.navigate(['/admin/filmes/listar']);

    })
  }
}
