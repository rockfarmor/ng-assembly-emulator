import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryComponent } from './components/memory/memory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HexPipe } from './pipes/hex.pipe';
import { Binary16Pipe } from './pipes/binary16.pipe';
import { Binary8Pipe } from './pipes/binary8.pipe';
import { InstructionTextPipe } from './pipes/instruction-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MemoryComponent,
    HexPipe,
    Binary16Pipe,
    Binary8Pipe,
    InstructionTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
