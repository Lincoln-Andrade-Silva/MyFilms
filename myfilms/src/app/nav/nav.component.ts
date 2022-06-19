import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { AuthService } from 'src/services/auth.service';
import { CarrinhoService } from 'src/services/carrinho.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() itensQtde: number = 0;

  usuario: Usuario = new Usuario();

  constructor(private carrinhoService: CarrinhoService,
    public authService: AuthService, private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.carrinhoService.totalDeItensNoCarrinho.subscribe((total) => {
      this.itensQtde = total;
    });
    if (this.authService.isAutenticado()){
      const id = this.authService.usuarioLogado.id;
      this.usuarioService.buscarPorId(String(id)).subscribe((usuario) => {
        this.usuario = usuario;
      });
    }
  }

  logout() {
    this.authService.logout();
  }


}
