import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './admin/filmes/adicionar/adicionar.component';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './admin/filmes/editar/editar.component';
import { ListarComponent } from './admin/filmes/listar/listar.component';
import { PedidosComponent } from './admin/pedidos/listar/pedidos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
