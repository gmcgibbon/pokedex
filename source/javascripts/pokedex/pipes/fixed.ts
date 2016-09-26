import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})
export class FixedPipe implements PipeTransform {

  transform(value: number, length: number, padding: string = '0'): any {
    if (! value || ! length || ! padding) return value;

    let str = value.toString();

    if (str.length < length) {
      return new Array(
        length - str.length + 1
      ).join(padding) + value;
    } else {
      return value;
    }
  }
}
