import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value) {
    // tslint:disable-next-line:curly
    if (!value) return;

    return value.reverse();
  }


}
