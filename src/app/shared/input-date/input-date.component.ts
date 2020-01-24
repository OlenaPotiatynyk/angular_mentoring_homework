import { ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {
  @Input() creationDate: any;

  set value(val) {
    this.onTouch(val);
  }

  public onTouch: any = () => {
  };

  public registerOnChange(fn: any): void {
    this.formatDate();
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  private formatDate(): void {
    this.creationDate = this.creationDate.value.date.split('T')[0];
  }
}
