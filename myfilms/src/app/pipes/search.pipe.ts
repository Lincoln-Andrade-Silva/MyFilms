import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

  transform(filmes: any[], search: string, field: string): any[] {
    if (!filmes) return [];
    if (!search) return filmes;
    if (search == 'All')return filmes;
    search = search.toLowerCase();
    return filmes.filter(filme => {
      if (filme && filme[field]) {
        return filme[field].toLowerCase().includes(search);
      }
      return false;
    });
  }

}
