import {Pipe, PipeTransform} from '@angular/core';

export interface PropertyFilter {
  key: string;
  value: any;
}

@Pipe({
  name: 'ngForFilterEvery'
})
export class NgForFilterEveryPipe implements PipeTransform {

  transform(items: any[], filter: PropertyFilter[]): unknown {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => filter.every((f) => item[f.key] === f.value));
  }

}
