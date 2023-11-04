import { Component, OnInit } from '@angular/core';
import { EmulatorService } from 'src/app/service/emulator.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  public DisplayType = DisplayType;

  public addresDisplayType = DisplayType.Decimal;
  public valueDisplayType = DisplayType.Instruction;

  constructor(public emulatorService: EmulatorService) {

  }

  ngOnInit(): void {
  }

  public toggleAddresDisplayType() {
    this.addresDisplayType = (this.addresDisplayType + 1) % 3;
  }

  public toggleValueDisplayType() {
    this.valueDisplayType = (this.valueDisplayType + 1) % 4;
  }

}

export enum DisplayType {
  Binary = 0,
  Hex = 1,
  Decimal = 2,
  Instruction = 3,
}
