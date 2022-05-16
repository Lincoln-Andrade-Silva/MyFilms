import { Filme } from "./Filme";

export class Pedido {
    id: number = 0;
    itens: Filme[] = [];
    total: number = 0;
}