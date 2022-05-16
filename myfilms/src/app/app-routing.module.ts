import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './admin/adicionar/adicionar.component';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './admin/editar/editar.component';
import { ListarComponent } from './admin/listar/listar.component';
import { PedidosComponent } from './admin/pedidos/pedidos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FilmeDetailsComponent } from './filme-details/filme-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'filmes/listar', component: ListarComponent },
      { path: 'filme/adicionar', component: AdicionarComponent },
      { path: 'filme/editar/:id', component: EditarComponent },
      { path: 'pedidos', component: PedidosComponent }
    ]
  },
  { path: 'filme-details/:id', component: FilmeDetailsComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
