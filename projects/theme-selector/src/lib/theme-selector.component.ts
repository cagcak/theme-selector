import { Component, OnInit } from '@angular/core';
import { Theme, ThemeSelectorService } from './theme-selector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-theme-selector',
  templateUrl: 'theme-selector.html',
  styleUrls: ['theme-selector.scss']
})
export class ThemeSelectorComponent implements OnInit {

  themePicker$: Observable<Theme | boolean>;

  constructor(private themeService: ThemeSelectorService) { }

  ngOnInit() {
    this.themePicker$ = this.themeService.themePicker$;
  }

}
