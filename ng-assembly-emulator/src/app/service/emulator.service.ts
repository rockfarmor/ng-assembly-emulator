import { Injectable } from '@angular/core';
import { ADRESSING_MODE, GenerateInstruction, MAX_HEX_VALUE, OP_CODE, PRIMARY_MEMORY_SIZE, randomInt, REGISTER } from '../utils/ArchitectureUtils';

@Injectable({
  providedIn: 'root'
})
export class EmulatorService {

  public bus: number = 0x0;

  public primaryMemory: number[] = new Array(PRIMARY_MEMORY_SIZE).fill(0x0);
  public programCounter: number = 0x0;

  public showIndexAsInstruction: number[] = []

  constructor() {
    this.reset();
    this.testInitPrimaryMemoryValues();
  }

  public testInitPrimaryMemoryValues() {
    this.primaryMemory[0] = GenerateInstruction(OP_CODE.STORE, REGISTER.GR0, ADRESSING_MODE.IMMEDIATE_ADDRESSING, 10);
    this.primaryMemory[1] = GenerateInstruction(OP_CODE.STORE, REGISTER.GR1, ADRESSING_MODE.IMMEDIATE_ADDRESSING, 0xFA);
    this.primaryMemory[2] = GenerateInstruction(OP_CODE.ADD, REGISTER.GR0, ADRESSING_MODE.REGISTER_ADDRESSING, REGISTER.GR1);
    this.primaryMemory[3] = GenerateInstruction(OP_CODE.NOP15, REGISTER.GR0, ADRESSING_MODE.REGISTER_ADDRESSING, REGISTER.GR1);
    this.primaryMemory[8] = 10;
    this.showIndexAsInstruction = [0,1,2,3];

    //Generate some random numbers
    for (let i = 10; i < 256; i++) {
      this.primaryMemory[i] = randomInt(0, 0xFFFF)
      
    }



  }


  public reset() {
    this.setBus(0xFF)
    this.primaryMemory = new Array(PRIMARY_MEMORY_SIZE).fill(0x0);
    this.setPC(0x0);
    this.showIndexAsInstruction = []
    this.testInitPrimaryMemoryValues()
  }

  public tick() {
    this.programCounter++;
  }
  
  public setPC(value:number) {
    this.programCounter = value % PRIMARY_MEMORY_SIZE;
  }

  public getPC() {
    return this.programCounter % PRIMARY_MEMORY_SIZE;
  }

  /**
   * Method that retrieves the value on the bus.
   */
  public getBus() {
    return this.bus % (MAX_HEX_VALUE+1);
  }

  public setBus(value: number) {
    this.bus = value % (MAX_HEX_VALUE+1);
  }


}

