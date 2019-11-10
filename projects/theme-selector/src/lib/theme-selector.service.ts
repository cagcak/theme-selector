import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Theme {
  $name: string;
  $color: string;
  $class: string;
  $icon: {
    iconColor$: string,
    iconBackground$: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  public themePicker$ = new Subject<Theme>();

  constructor() { }

  private createThemePicker(
    $name: string,
    $color: string,
    $class: string,
    iconColor$: string,
    iconBackground$: string
  ): Theme {
    return { $name, $color, $class, $icon: { iconColor$, iconBackground$ } };
  }

  public createDarkTheme(): void {
    this.themePicker$.next(this.createThemePicker(
      'dark', '#333', 'th-dark', '#756ACD', '#56BC32'
    ));
  }

  public createLightTheme(): void {
    this.themePicker$.next(this.createThemePicker(
      'light', '#fff', 'th-light', '#756ACD', '#56BC32'
    ));
  }

}
