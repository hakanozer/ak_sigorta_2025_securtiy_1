import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPagetitle]',
  standalone: true
})
export class PagetitleDirective {

  @Input() title = ''
  @Input() color = 'black'

  constructor( private elementRef: ElementRef ) { }

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = `
      <h3 style='color: `+this.color+`'>`+this.title+`</h3>
    `
  }

}
