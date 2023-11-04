import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hex'
})
export class HexPipe implements PipeTransform {

  transform(value: number): string {
    return '0x' + value.toString(16).toUpperCase();
  }

}
