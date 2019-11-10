import { Component } from '@angular/core';
import { ThemeSelectorService } from 'projects/theme-selector/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-selector-showcase';

  constructor(
    private themeService: ThemeSelectorService
  ) { }

  switchToDarkTheme() {
    this.themeService.createDarkTheme();
  }

  switchToLightTheme() {
    this.themeService.createLightTheme();
  }
}
