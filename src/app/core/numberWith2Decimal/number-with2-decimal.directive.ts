import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberWith2Decimal]'
})
export class NumberWith2DecimalDirective {
  customValue:any='';
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (event.data) {
      if (
        (event.data.charCodeAt(0) >= 48 && event.data.charCodeAt(0) <= 57) ||
        event.data.charCodeAt(0) == 45
      ) {
        this.customValue = this.el.nativeElement.value;
        this.customValue = this.customValue.replace('.', '');
        this.customValue = [
          this.customValue.slice(0, 1),
          '.',
          this.customValue.slice(1),
        ].join('');
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