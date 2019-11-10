import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Icon {
  iconColor$: string;
  iconBackground$: string;
}
export interface Theme {
  $name: string;
  $color: string;
  $class: string;
  $icon: Icon;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  public themePicker$ = new Subject<Theme>();

  constructor() {}

  private createThemePicker(
    $name: string,
    $color: string,
    $class: string,
    $icon: {
      iconColor$: string,
      iconBackground$: string
    },
  ): Theme {
    return {
      $name,
      $color,
      $class,
      $icon
    };
  }

  public switchTheme(
    $themeSpecs: any
  ): void {
    if ($themeSpecs) {
      this.themePicker$.next(
        this.createThemePicker(
          $themeSpecs.$name,
          $themeSpecs.$color,
          $themeSpecs.$class,
          $themeSpecs.$icon = {
            iconColor$: $themeSpecs.$icon.iconColor$,
            iconBackground$: $themeSpecs.$icon.iconBackground$
          },
        )
      );
    } else {
      console.error('Theme specification is not valid', $themeSpecs);
    }
  }

}
