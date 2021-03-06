import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeSelectorModule } from 'projects/theme-selector/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThemeSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
