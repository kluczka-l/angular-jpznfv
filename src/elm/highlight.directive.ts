import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[elmHighlight]'
})
export class HighlightDirectiveFromElm {
  @Input("elmHighlight") highlightColor: string;
  @Input() defaultColor: string;

    constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
    //window.alert("mouseEnter, color =" + this.highlightColor)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}