import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaFilter'
})
export class CategoriaFilterPipe implements PipeTransform {

  transform(filmes: any[], searchcat: string): any[] {
    if (!filmes) return [];
    if (!searchcat) return filmes;
    if (searchcat==='Categoria') return filmes;
    searchcat = searchcat.toLowerCase();
    return filmes.filter(filme => {
      if (filme && filme['categoria']) {
        return filme['categoria'].toLowerCase().includes(searchcat);
      }
      return false;
    });
  }

}
