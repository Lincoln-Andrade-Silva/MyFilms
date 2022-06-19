import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { Pedido } from 'src/models/Pedido';
import { Usuario } from 'src/models/Usuario';
import { AuthService } from 'src/services/auth.service';
import { CarrinhoService, ItemDataSource } from 'src/services/carrinho.service';
import { PedidosService } from 'src/services/pedidos.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  deleteConfirm = false;
  filme: Filme = new Filme();

  constructor(private router: Router, private carrinhoService: CarrinhoService, private pedidoService: PedidosService,
    private authService: AuthService, private usuarioService: UsuarioService) {
  }

  isCarrinhoVazio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  valorTotalDoPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  itensDoCarrinho: ItemDataSource = new ItemDataSource();
  displayedColumns: string[] = ['Photo', 'Nome', 'Type', 'Price', 'Remove']

  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.fonteDeDados;
    this.valorTotalDoPedido = this.carrinhoService.valorTotalDoPedido;
    this.isCarrinhoVazio = this.carrinhoService.isCarrinhoVazio;
    if (this.authService.isAutenticado()){
      const id = this.authService.usuarioLogado.id;
      this.usuarioService.buscarPorId(String(id)).subscribe((usuario) => {
        this.usuario = usuario;
      });
    }

  }

  limpar() {
    this.carrinhoService.limpar();
  }

  excluir() {
    this.carrinhoService.removerItem(this.filme)
  }

  saveFilme(filme: Filme) {
    this.filme = filme
  }

  addPedido() {
    if (this.authService.isAutenticado()) {
      const pedido = new Pedido();
      pedido.itens = this.carrinhoService.getItens();
      const total = this.carrinhoService.valorTotalDoPedido.value;
      pedido.total = Number(total.toFixed(2));
      pedido.comprador = this.usuario.nome;
      this.pedidoService.incluir(pedido).subscribe(() => {
        this.carrinhoService.limpar();
      });
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  formatar(valor: BehaviorSubject<number>) {
    const conversor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }

  /*truncate(str: string | undefined) {
    if (str) {
      return str.substring(0, 99) + '...';
    } else { return str }
  }*/

}
