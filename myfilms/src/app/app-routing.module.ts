import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './admin/adicionar/adicionar.component';
import { AdminComponent } from './admin/admin.component';
import { ListarComponent } from './admin/listar/listar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FilmeDetailsComponent } from './filme-details/filme-details.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'filmes/listar', component: ListarComponent },
      { path: 'filme/adiconar', component: AdicionarComponent }
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
