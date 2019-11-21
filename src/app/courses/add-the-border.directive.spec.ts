import { AddTheBorderDirective } from './add-the-border.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AddTheBorderDirective', () => {
  let fixture;
  let debugElement;

  const twoDaysInMilliseconds = 172800000;
  const freshCourseDate = Date.now() - twoDaysInMilliseconds;
  const upcomingCourseDate =  Date.now() + twoDaysInMilliseconds;
  const colorGreen = 'rgb(155, 200, 55)';
  const colorBlue = 'rgb(48, 182, 221)';

  @Component({
    template: `<div class="container" appAddTheBorder="${freshCourseDate}"></div>`
  })
  class TestComponent { }

  @Component({
    template: `<div class="container" appAddTheBorder="${upcomingCourseDate}"></div>`
  })
  class Test2Component { }

  it('should create an instance', () => {
    const directive = new AddTheBorderDirective(fixture);
    expect(directive).toBeTruthy();
  });

  describe('when the course was created in the last 14 days', () => {
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ AddTheBorderDirective, TestComponent ]
      })
      .createComponent(TestComponent);

      fixture.detectChanges();

      debugElement = fixture.debugElement.queryAll(By.directive(AddTheBorderDirective))[0];
    });

    it('should add green border to the element', () => {
      const borderColor = debugElement.nativeElement.style.borderColor;
      expect(borderColor).toBe(colorGreen);
    });
  });

  describe('when the course is upcoming', () => {
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ AddTheBorderDirective, Test2Component ]
      })
        .createComponent(Test2Component);

      fixture.detectChanges();

      debugElement = fixture.debugElement.queryAll(By.directive(AddTheBorderDirective))[0];
    });

    it('should add blue border to the element', () => {
      const borderColor = debugElement.nativeElement.style.borderColor;
      expect(borderColor).toBe(colorBlue);
    });
  });

});
