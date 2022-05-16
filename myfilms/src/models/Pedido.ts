import { Filme } from "./Filme";

export class Pedido {
    id: number = 0;
    itens: Filme[] = [];
    comprador: string = '';
    total: number = 0;
}