import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let a = '';
    if (value > 4) {
        for (let i = 5; i <= value; i += 5) {
          a += '*';
        }
        return a;
    }
  }

}
