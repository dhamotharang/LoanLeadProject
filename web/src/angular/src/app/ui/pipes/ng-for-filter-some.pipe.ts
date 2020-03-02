import {Pipe, PipeTransform} from '@angular/core';
import {PropertyFilter} from "./ng-for-filter-every.pipe";

@Pipe({
  name: 'ngForFilterSome'
})
export class NgForFilterSomePipe implements PipeTransform {

  transform(items: any[], filter: PropertyFilter[]): unknown {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => filter.some((f) => item[f.key] === f.value));
  }

}
