# AngularNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Data Binding
Component(.ts) dosyasi ile view(html) arasındaki haberleşmeyi sağlar.
örneğin: Html bir verinin aktarılması, html de bir eventin tetiklenmesi.

![Alt text](/src/assets/data-binding.PNG )


#### 1. String Interpolation
curly braces (parentez ) arasında yazılan değişken değeğri html aktarılır. Component adının yazılmasında sık sık kullanılır.
> {{ value }}

#### 2. Property Binding 
Dom elemanlarının özellikleri üzerinden dinamik işlem yapmamızı sağlar.

> [property]=”value”
> value metot veya değişken olabilir. <img [src] ="image">    
><input type="email" [value]="user.email">    
> <button [disabled]="isDisabled">I am disabled < /button>

> < div [class] ="value"> ==> var olan class lar silinir ve yeni class div e eklenir. Dikkat ediniz.

> < div [class.active] ="value"> div e aktif özelliğini eklemek istiyorum. Var olan classlar silinmez. value true ise mevcut classlara istenilen class ı ekler.

> div [ngclass]="object"
object { class1:true, class2: false } true değerleri mevcuttaki classlara ekler


#### 3. Event Binding
ilk iki bind yöntemi componentten dom giden bind işlemleriydi.
Event binding ise  Domdan componente giden bind işlemidir.
Dom üzerinden tetiklenen olaylar sonucunda işlem yapmamızı sağlar.
Örneğin click, change, keyup
> (event)="function"  örneğin (click)="triggerAlert"

#### 4. Two-way Data Binding
Event binding ve property binding birleşimi ile olusur. view ve component çift yönlü sekronize bir şekilde haberleşir.
ilk örnekte property ve event ile birleştirerek kullanıldı. Ama bunun faha kolay yolu module **FormsModule** eklemektir. 

> [(ngModel)] = "[property of your component]"  