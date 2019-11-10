import { Component, OnInit, AfterContentChecked, ViewChild, Input } from '@angular/core';
import { Theme, ThemeSelectorService } from './theme-selector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-theme-selector',
  templateUrl: 'theme-selector.html',
  styleUrls: ['theme-selector.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent implements OnInit, AfterContentChecked {
  // @Input() appHighlight: string;
  // @ViewChild('menuList', { static: false }) list;

  public themes: Theme[] = [
    {
      $name: 'dark',
      $color: '#333',
      $class: 'th-dark',
      $icon: {
        iconColor$: '#756ACD',
        iconBackground$: '#432'
      }
    },
    {
      $name: 'light',
      $color: '#fff',
      $class: 'th-light',
      $icon: {
        iconColor$: '#756ACD',
        iconBackground$: '#234'
      }
    },
  ];
  currentThemeIndex = 0;
  toggle = false;
  themePicker$: Observable<Theme | boolean>;

  constructor(
    private themeService: ThemeSelectorService
  ) {
    this.themePicker$ = this.themeService.themePicker$;
  }

  ngOnInit() { }

  ngAfterContentChecked(): void {
    this.themeSelect(this.currentThemeIndex);
  }

  themeSelect(themeIndex: number) {
    this.currentThemeIndex = themeIndex;
    this.themeService.switchTheme(this.themes[this.currentThemeIndex]);
  }

}
