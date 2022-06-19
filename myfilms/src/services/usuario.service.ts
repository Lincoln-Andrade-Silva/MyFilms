import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { genericCRUD } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends genericCRUD<Usuario>{

  constructor(protected override http: HttpClient) {
    super(http, "http://localhost:3001/users");
   }

}
