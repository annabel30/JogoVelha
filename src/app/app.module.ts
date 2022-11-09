import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacarComponent } from './placar/placar.component';
import { JogarComponent } from './jogar/jogar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacarComponent,
    JogarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
