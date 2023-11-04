import { Component, OnInit } from '@angular/core';
import { EmulatorService } from './service/emulator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-assembly-emulator';

  constructor(public emulatorService: EmulatorService) {

  }

  ngOnInit(): void {
  }


}
