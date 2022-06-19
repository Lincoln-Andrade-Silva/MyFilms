import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Usuario } from 'src/models/Usuario';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router,

    private http: HttpClient,

    private location: Location) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAutenticado()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public isAutenticado(): boolean {
    return this.usuarioLogado.id > 0;
  }

  usuarioLogado: Usuario = new Usuario();;
  URL_AUTH = "http://localhost:3001/auth";

  public isAdmin(): boolean {
    const papel = this.usuarioLogado.nome;
    return this.isAutenticado() && papel === "admin";
  }

  login(email: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(this.URL_AUTH, { email: email, senha: senha })
      .pipe(tap(usuario => this.usuarioLogado = usuario));
  }

  logout() {
    try {
      this.usuarioLogado = new Usuario();
      this.router.navigate(['/filmes']);
    } catch (err) {
      console.error(err);
    }
  }
}
