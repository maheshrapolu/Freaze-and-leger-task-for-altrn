import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (!value) { return []; }
    if (!searchText) { return value; }
    searchText = searchText.toLowerCase();
    return value.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
