import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PixiModule } from 'angular2pixi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PixiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
