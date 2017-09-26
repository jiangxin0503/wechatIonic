import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstCharFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstCharFormat',
})
export class FirstCharFormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase/uppercase.
   */
  transform(value: string, ...args): string{
    
    let result = value;

    if(value === null) {
    	return 'Not Assigned';
    }else{
    	result = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    if(args[0] === 'uppercase') {
      return result;
    }

    if(args[0] === 'lowercase'){
    	result = value.charAt(0).toLowerCase() + value.slice(1).toLowerCase();
    }

    return result;
  }
}
