import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddTheBorder]'
})
export class AddTheBorderDirective implements OnInit {
  @Input('appAddTheBorder') creationDate: string;

  private currentDate: number = Date.now();
  private freshCoursePeriod = 1209600000;

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    const date = new Date(this.creationDate).getTime();

    if (date < this.currentDate && date >= this.currentDate - this.freshCoursePeriod) {
      this.el.nativeElement.className = this.el.nativeElement.className.concat(' fresh-course');
    }

    if (date > this.currentDate) {
      this.el.nativeElement.className = this.el.nativeElement.className.concat(' upcoming-course');
    }
  }
}
