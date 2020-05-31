import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Model } from './Model';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(values: Model[]): Model[] {
    
    return values;
  }

}
