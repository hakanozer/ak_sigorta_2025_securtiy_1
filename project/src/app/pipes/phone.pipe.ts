import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');
  }

}
