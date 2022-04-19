import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaFilter'
})
export class CategoriaFilterPipe implements PipeTransform {

  transform(grupos: any[], searchcat: string): any[] {
    if (!grupos) return [];
    if (!searchcat) return grupos;
    if (searchcat==='Todos') return grupos;
    searchcat = searchcat.toLowerCase();
    return grupos.filter(grupo => {
      if (grupo && grupo['key']) {
        return grupo['key'].toLowerCase().includes(searchcat);
      }
      return false;
    });
  }

}
