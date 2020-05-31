import { Component } from '@angular/core';
import { Model } from './Model';

@Component({
    selector: "app-pipe-type",
    template: `
    <h3> app-pipe-type </h3>
    <div>
        <input type="text"  [(ngModel)]="input">
    </div>
    <div>
        <button (click)="onBtnClick()"> ekle </button>
    </div>

    <h5> list | impurePipe </h5>
    <div *ngFor="let item of  list | impurePipe ">
        {{item.value}}
    </div>

    <h5> list | purePipe </h5>
    <div *ngFor="let item of  list | purePipe ">
        {{item.value}}
    </div>


    
    `
})
export class PipeTypeComponents {

    list: Model[] = [new Model("cebrail"), new Model("istanbul")];
    input: string;

    onBtnClick() {
    
        this.list.push(new Model(this.input));
        this.input = "";
    }

}

