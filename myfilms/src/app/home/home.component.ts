import { Component, OnInit } from '@angular/core';
import { Filmes } from '../filmes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes = Filmes

  constructor() { }

  ngOnInit(): void {
  }

}
