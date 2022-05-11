import { Filme } from "./Filme";

export class ItemCarrinho {
    id: number = 0;
    filme: Filme | undefined;
    cupom: string = "";
}