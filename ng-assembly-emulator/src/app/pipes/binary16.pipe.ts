import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binary16'
})
export class Binary16Pipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 0 && value <= 65535) {
      return ('0000000000000000' + value.toString(2)).slice(-16);
    } else {
      return 'Invalid Number';
    }
  }

}
