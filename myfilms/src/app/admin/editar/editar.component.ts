import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {

  filmes: Filme[];
  filme: Filme = new Filme();
  grupos: any = [];
  categ: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: FilmesService) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(filmes => {
      this.grupos = this.service.group_by(filmes, "categoria");
      this.filmes = filmes;
    });

    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(String(str)).subscribe((filme) => {
      this.filme = filme
    });
  }

  atualizarFilme() {
    this.service.atualizar(this.filme).subscribe(() => {
      this.router.navigate(['/admin/filmes/listar']);
    });

  }

}
