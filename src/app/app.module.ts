import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { computerComponent } from './computer.component';
import { PowerBoostCalculatorComponent } from './PowerBoostCalculator.component';
import { ExponentialStrengthPipe } from './ExponentialStrength.pipe';
import { PurePipe } from './pipetype/pure.pipe';
import { ImpurePipe } from './pipetype/impure.pipe';
import { PipeTypeComponents } from './pipetype/pipeType.component';

@NgModule({
  declarations: [
    AppComponent,
    computerComponent,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe,
    PurePipe,
    ImpurePipe,
    PipeTypeComponents,
    ImpurePipe,
    PurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
