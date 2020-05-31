import { Component } from '@angular/core';

@Component({
    selector: 'computer-component',
    template: `<a href="https://angular.io/api?type=pipe">Anguların sağladığı pipe'lar</a> 
                <p>{{getValues()}}</p>
                <h3> Date pipe </h3>
                <p>pipe'sız değer: {{date | date }} </p>
                <p> {{date | date: 'shortDate' }} </p>
                <p> {{date | date: 'dd/MM/yyyy HH:mm:ss' }} </p>
                <p> {{date | date: 'fullDate' }} </p>

            
                <h3>yazılar üzerinde kullanılan pipeler </h3>        
                <p>pipe'sız değer: {{brand }} </p>
                <p> {{brand | uppercase }} </p>
                <p> {{brand | lowercase  }} </p>
                <p> {{brand | titlecase  }} </p>
                <p> {{desc | lowercase  }} </p>
    
                <h3>DecimalPipe </h3>
                <p>pipe'sız id değeri: {{id}} </p>
                <p>id | number: {{id  | number}} </p>
                <p>id | number: {{id | number:'1.2-2'}} </p>
                <p>12.213   | number:'1.2-2': {{12.213  | number:'1.2-2'}} </p>
                <p>12.2     | number:'1.2-2': {{12.2    | number:'1.2-2'}} </p>
                <p>12.21355 | number:'1.2-2': {{12.21555 | number:'1.2-2'}} </p>
                <p>12 | number: '1.1-3' :{{12  | number:'1.1-3'}} </p>
                <p>12.21  | number: '1.1-3': {{12.21  | number:'1.1-3'}} </p>
                <p>12.2165756456  | number: '1.1-3' {{12.2165756456  | number:'1.1-3'}} </p>
                <div>
                    <p>Without JSON pipe:</p>
                    <pre>{{object}}</pre>
                    <p>With JSON pipe:</p>
                    <pre>{{object | json}}</pre>
                </div>

                <p>{{str}}[0:4]: '{{str | slice:0:4}}'</p>

                <button (click)="onBtnClicked()">get values</button>
                <p>{{values}}</p>
                `
})
export class computerComponent {

    date: Date = new Date();
    brand: string = "AsuS";
    price: number = 989.97;
    id: number = 6548852;
    desc: string = "ASUS ZenBook 13 Ultra Slim Laptop";
    object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
    str: string = 'abcdefghij';
    values;

    getValues() {
        return "date:" + this.date + " brand:" + this.brand + " price:" + this.price + " id:" + this.id + " desc:" + this.desc + " str:" + this.str;
    }

    onBtnClicked() {
        this.values = this.getValues();
    }

}