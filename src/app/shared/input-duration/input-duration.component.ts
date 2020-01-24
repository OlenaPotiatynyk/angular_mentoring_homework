import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDurationComponent),
      multi: true
    }
  ]
})
export class InputDurationComponent implements ControlValueAccessor {
  @Input() duration: number;

  set value(val) {
    this.onTouch(val);
  }

  public onTouch: any = () => {
  };

  public registerOnChange(fn: any): void {
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

}
