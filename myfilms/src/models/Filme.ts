export interface Filme {
    id: string,
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
    id: string = '' ;
    nome: string = '';
    desc: string = '';
    foto: string = '';
    categoria: string = '';
    preco_aluguel: number = 0;
    preco_fixo: number = 0;
    data_lancamento: string = '' ;
    diretor: string = "" ;
}