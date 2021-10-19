import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.el.nativeElement.style.backgroundColor = 'rgb(109, 255, 109';
  }

  @HostListener('mouseout') onOut() {
    this.el.nativeElement.style.backgroundColor = '#fff';
  }

}
