import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddTheBorder]'
})
export class AddTheBorderDirective implements OnInit {
  @Input('appAddTheBorder') creationDate: number;

  private currentDate: number = Date.now();
  private freshCoursePeriod = 1209600000;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.creationDate < this.currentDate && this.creationDate >= this.currentDate - this.freshCoursePeriod) {
      this.el.nativeElement.style.border = '2px solid #9bc837';
    }

    if (this.creationDate > this.currentDate) {
      this.el.nativeElement.style.border = '2px solid #30b6dd';
    }
  }
}
