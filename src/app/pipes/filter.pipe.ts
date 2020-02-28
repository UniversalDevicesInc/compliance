import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, by: string): any[] {
    if(!items) return []
    if(!value) return items
    let prop = by || 'id'
    value = value.toLowerCase()
    return items.filter(it => {
      return it[prop].toLowerCase().includes(value)
    })
   }

}
