import { Pipe, PipeTransform } from '@angular/core';

export class CustomPipe implements PipeTransform {
    transform(value: String, ...args: any[]) {
        throw new Error("Method not implemented.");
    }

}