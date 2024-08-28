import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableRightClick]'
})
export class DisableRightClickDirective {

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault(); // منع النقر بزر الماوس الأيمن
  }

}
