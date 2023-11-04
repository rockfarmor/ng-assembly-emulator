import { Pipe, PipeTransform } from '@angular/core';
import { ADDRESING_MODE_TEXT, getEnumTextFromValue, OP_CODE, REGISTER } from '../utils/ArchitectureUtils';

@Pipe({
  name: 'instructionText'
})
export class InstructionTextPipe implements PipeTransform {

  transform(value: number): string {
    if(value == 0)
    return "0";
    
    const address =        (value & 0b0000000011111111);
    const addressingMode = (value & 0b0000001100000000) >> 8;
    const register =      (value & 0b0000110000000000) >> 10;
    const opCode =        (value & 0b1111000000000000) >> 12;

    var str = getEnumTextFromValue(opCode, OP_CODE) + " " + getEnumTextFromValue(register, REGISTER) + " " + ADDRESING_MODE_TEXT[addressingMode] + " " + address;


    return str;
    //return '0x' + value.toString(16).toUpperCase();
  }

}
