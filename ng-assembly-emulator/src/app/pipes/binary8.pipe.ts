import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binary8'
})
export class Binary8Pipe implements PipeTransform {

  
  transform(value: number): string {
    if (value >= 0 && value <= 0xff) {
      return ('00000000' + value.toString(2)).slice(-8);
    } else {
      return 'Invalid Number';
    }
  }

}
