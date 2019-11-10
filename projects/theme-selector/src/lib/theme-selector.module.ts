import { NgModule } from '@angular/core';
import { ThemeSelectorComponent } from './theme-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ThemeSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [ThemeSelectorComponent]
})
export class ThemeSelectorModule { }
