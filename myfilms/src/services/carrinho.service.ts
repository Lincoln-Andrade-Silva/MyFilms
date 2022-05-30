import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Filme } from 'src/models/Filme';
import { ItemCarrinho } from 'src/models/ItemCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private _mapItens = new Map<number, Filme>();
  private _itens: BehaviorSubject<Filme[]> = new BehaviorSubject<Filme[]>([]);
  public itens = this._itens.asObservable();
  public quantidade: number = 0;
  public fonteDeDados = new ItemDataSource();

  private _totalDeItens: number = 0;
  private _totalDeItensNoCarrinho: Subject<number> = new Subject<number>();
  public totalDeItensNoCarrinho = this._totalDeItensNoCarrinho.asObservable();

  private _valorTotal: number = 0;
  public valorTotalDoPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public isCarrinhoVazio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private atualizarDados() {
    this._itens.next([...this._mapItens.values()]);
    this.fonteDeDados.atualizar([...this._mapItens.values()]);
    this.atualizarTotalDeItens([...this._mapItens.values()]);
  }

  public getItens() {
    return [...this._mapItens.values()];
  }

  public limpar() {
    this._mapItens = new Map<number, Filme>();
    this.atualizarDados();
  }

  private atualizarTotalDeItens(itens: Filme[]) {

    this._totalDeItens = 0;
    this._valorTotal = 0;

    for (const item of itens) {
      this._totalDeItens += item.quantidade;
      this._valorTotal += (item.preco * item.quantidade);
    }

    if (this._totalDeItens < 1) {
      this.isCarrinhoVazio.next(true);
    } else {
      this.isCarrinhoVazio.next(false);
    }

    this._totalDeItensNoCarrinho.next(this._totalDeItens);
    this.valorTotalDoPedido.next(this._valorTotal);
  }

  atualizarItem(filme: Filme) {
    const item = this._mapItens.get(filme.id);
    if (filme.quantidade < 1) {
      this.removerItem(filme)
    } else {
      this._mapItens.set(filme.id, filme);
      this.atualizarDados();
    }
  }

  incrementarUmItem(filme: Filme) {
    const item = this._mapItens.get(filme.id);
    if (typeof filme.quantidade === 'undefined') {
      filme.quantidade = 1;
    }
    this._mapItens.set(filme.id, filme);
    this.quantidade++;
    this.atualizarDados();
  }

  removerItem(filme: Filme) {
    const item = this._mapItens.get(filme.id);
    if (item) {
      this._mapItens.delete(filme.id);
      this.quantidade--;
      this.atualizarDados();
    }
  }
}
export class ItemDataSource extends DataSource<Filme> {

  private _streamDeDados = new ReplaySubject<Filme[]>();

  connect(): Observable<Filme[]> {
    return this._streamDeDados;
  }

  atualizar(dados: Filme[]) {
    this._streamDeDados.next(dados);
  }

  disconnect() { }
}

