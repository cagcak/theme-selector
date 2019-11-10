import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libThemeSelectorMenu]'
})
export class ThemeSelectorMenuDirective {

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef
  ) {
    console.log(this.el);
    console.log(this.viewContainer);
  }

  private toggleMenu(active: boolean) {
    // if (active) {
    // } else {
    // }
  }

}
