import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, inMayus: boolean): string {
  //  if( inMayus === true){
  //   return value.toUpperCase();
  //  } else {
  //   return value.toLowerCase();
  //  }
  return (inMayus) ? value.toUpperCase() : value.toLowerCase();
  }
}
