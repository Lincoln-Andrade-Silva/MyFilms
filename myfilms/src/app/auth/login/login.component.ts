import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Location } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  isInvalido = false;

  constructor( private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required])
     });
   }

  logar(){
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.senha)
      .pipe(catchError(error =>{
        this.isInvalido = true;
        return throwError(error);
      }))
    .subscribe(() => {
      this.isInvalido = false;
      this.router.navigate(['/filmes']);
    });
  }


}
