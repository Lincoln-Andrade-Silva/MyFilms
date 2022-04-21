import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/models/Filme';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-modalexcluir',
  templateUrl: './modalexcluir.component.html',
  styleUrls: ['./modalexcluir.component.scss']
})
export class ModalexcluirComponent implements OnInit {

  filme: any;

  constructor(private service: FilmesService, private router: Router,) { }

  ngOnInit(): void {
  }

  displayStyle = "none";

  load() {
    const HAS_RELOAD = 'hasReload';
    const hasReload = sessionStorage.getItem(HAS_RELOAD);
    if (!hasReload) {
      sessionStorage.setItem(HAS_RELOAD, 'true');
      location.reload();
    }
  }

  openPopupFilm(filme: Filme) {
    this.displayStyle = "block";
    this.filme = filme;
    return this.filme;
  }

  closePopup() {
    this.displayStyle = "none";
    this.load();
  }

  excluir() {
    this.service.excluir(this.filme.id).subscribe(() => {
      this.router.navigate(['/admin/filmes/listar']);
      this.load();
    });
  }
}
