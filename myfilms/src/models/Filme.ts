export interface Filme {
    id: number,
    nome: string,
    desc: string,
    foto: string,
    categoria: string,
    preco_aluguel: number,
    preco_fixo: number,
    data_lancamento: string,
    diretor: string,
}

export class Filme {
    id: number = 0;
    nome: string = '';
    desc: string = '';
    foto: string = '';
    categoria: string = '';
    preco_aluguel: number = 0;
    preco_fixo: number = 0;
    data_lancamento: string = '';
    diretor: string = "";
    preco: any;
    tipo: any;
    quantidade: 'undefined' | any;
}