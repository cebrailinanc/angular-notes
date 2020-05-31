import { Pipe, PipeTransform } from '@angular/core';
import { Model } from './Model';

@Pipe({
  name: 'purePipe'
})
export class PurePipe implements PipeTransform {

  transform(values: Model[]): Model[] {
    return values;
  }

}
