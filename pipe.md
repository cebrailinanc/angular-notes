# AngularNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Pipe Nedir?
Pipe veriyi biçimlendir dönüştürmek veya filtreleme yapmak için kullanılır.Dom da | karekteri ile kullanılır. Veya componentde Kullanılabilir.
Ham veriyi değiştirmeden Dom da isteğimiz gibi göstermek aoldukça avantajlı.

![Alt text](/src/assets/pipe.png)


```
{{value | pipeAdı}} genel kullanımı. Bazı pipeler parametre veya parametreler alır.Parametreler : ile eklenir. {{value | pipeAdı:param}}
```

## Pipe Türleri
Angular bize bazı pipeları sağlar.Built-in pipe olarak adlandırılır. Örneğin Lowercasepipe, Uppercasepipe, Datepipe ,Currencypipe... İhtiyaca göre kendi Pipe'mızı yazabiliriz.
> {{title | uppercase}} &#8594; title değerini büyük harfe dönüştürür.

>{{tarih | date: 'dd/MM/yyyy HH:mm:ss' }} &#8594; Tarih değerini date pipe kullanarak parametrede verdiğimiz formata dönüştürür. 
Angularda iki tür pipe tanımlanabilir:
pure : Default bir pipedır. Pure pipe değişiklik olduğunda tetiklenir.
primitive typler(string boolean,number)
veya obje referansları değiştiğinde.
Objenin içindeki değişiklikleri değişmesi ile tetiklenmez. 
impure: Pipe tanımmlanırken pure değeri false verilerek oluşturulur.

```
@Pipe({
  name: 'myCustomPipe', 
  pure: false/true        <----- here (default is `true`)
})
export class MyCustomPipe {}
```

## Kendi Pipemızı Yazalım
Pipe'ı manual dosya olusturarakta yapabiliriz angular cli kullanarakta tanımlayabiliriz.
angular cli kullanmak kolay ve hata yapmamızı en aza indirir. Manuel pipe aşağıdaki adımlarla oluşturulabilir.
* .ts dosyası oluşturulu.
* Decorater bilgisi eklenir. @Pipe 
* @Pipe decorater'ına name parametresi eklenir.Name değeri ile domda kullanılır.
* PipeTransform interface 'den implement edilir. Sonrasında transform metoduna gerekli ihtiyaç kodlanır.
* Pipe ın kullanılması için son olarak modüle dahil edilir.
@NgModule decorater'ın altındaki declarations kısmına dahil edilir.

Bütün bunları yapmak yerine cli dan **ng g pipe <dizin/pipeadı>** komutu ile pipe olusturulur. Module eklenir. Siz sadece transform medorunda ihtiyacı kodlarsınız. 
Örnek cli komutuyla pipetype klasoru altında pure pipe oluşturulur.
> ng g p pipetype/pure


## Pipe nerde kullanılır