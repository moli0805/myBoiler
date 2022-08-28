import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {
  customValue:any='';
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (event.data) {
      if (
        (event.data.charCodeAt(0) >= 48 && event.data.charCodeAt(0) <= 57)
      ) {
        this.customValue = this.el.nativeElement.value;
      } else {
        if (this.customValue.length) {
          this.customValue = this.customValue;
        } else {
          this.customValue = '';
        }
      }
      this.el.nativeElement.value = this.customValue;
    }
  }
}
