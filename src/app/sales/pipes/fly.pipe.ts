import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly',
})
export class FlyCasePipe implements PipeTransform {
  transform(value: boolean): string {
    return (value) ? 'fly' : 'not fly';
  }
}
