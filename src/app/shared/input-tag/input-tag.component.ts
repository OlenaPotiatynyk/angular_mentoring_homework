import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTagComponent),
      multi: true
    }
  ]
})
export class InputTagComponent implements ControlValueAccessor {
  @Input() authors;

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
