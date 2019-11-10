import { NgModule } from '@angular/core';
import { ThemeSelectorComponent } from './theme-selector.component';
import { CommonModule } from '@angular/common';
import { ThemeSelectorMenuDirective } from './theme-selector-menu.directive';

@NgModule({
  declarations: [
    ThemeSelectorComponent,
    ThemeSelectorMenuDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ThemeSelectorComponent]
})
export class ThemeSelectorModule { }
