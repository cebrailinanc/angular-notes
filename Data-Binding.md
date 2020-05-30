# AngularNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Data Binding
Component(.ts) dosyasi ile view(html) arasındaki haberleşmeyi(veri taşınmasını )sağlar.
örneğin: Html bir verinin aktarılması, html de bir eventin tetiklenmesi.

![Alt text](/src/assets/data-binding.PNG )


#### 1. String Interpolation
Curly braces (parentez) ile html'e yazılır.
Component'deki değeri DOM'a aktarır. Component adının yazılmasında sık sık kullanılır.
> {{ value }}

#### 2. Property Binding 
Dom elemanlarının özellikleri üzerinde dinamik işlem yapmamızı sağlar.

> [property]=”value”
> value metot veya değişken olabilir.     > ><img [src] ="image">    
><input type="email" [value]="user.email">    
> <button [disabled]="isDisabled">I am disabled < /button>

> < div [class] ="value"> ==> var olan class lar silinir ve yeni class div e eklenir. Dikkat ediniz.

> < div [class.active] ="value"> div e aktif özelliğini ekler. Var olan classlar silinmez. value true ise mevcut classlara  active classını ekler. active yerine başka classlarda yazılabilir.

> div [ngclass]="object"
**object { class1:true, class2: false }**  true değerlerine sahip classları mevcuttaki classlara ek div e ekler.


#### 3. Event Binding
ilk iki bind yöntemi componentten DOM'a   bind işlemleriydi.
Event binding ise  Domdan componente bind işlemidir.
Dom üzerinden tetiklenen olaylar sonucunda işlem yapmamızı sağlar.
Örneğin click, change, keyup
> (event)="function"  örneğin (click)="triggerAlert"

#### 4. Two-way Data Binding
Event binding ve property binding birleşimi ile olusur. view ve component çift yönlü sekronize bir şekilde haberleşir.
ilk örnekte property ve event ile birleştirerek kullanıldı. Ama bunun daha kolay yolu angular module **FormsModule** eklemektir. 

> [(ngModel)] = "[property of your component]"  