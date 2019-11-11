import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], term: string): any {
    return array.filter(item => item.title.indexOf(term) !== -1);
  }

}
