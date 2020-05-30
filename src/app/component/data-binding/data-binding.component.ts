import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  title: string = "Data binding component";
  imagePath: string = "assets/data-binding.PNG";
  arrays: number[] = [1, 2, 3, 4, 5, 6];
  size = 60;
  isDisable = true;
  classBind = "blueFont";
  email: string = "";
  userName: string;
  constructor() { }

  getTitleByMethod(): string {
    return this.title;
  }

  getImagePath(): string {
    return this.imagePath;
  }

  triggerAlert(): void {
    console.log("Event binding success....")
    alert("Event binding success....")
  }

  onClickDiv() {
    console.log("clicked  Div....")
    alert("clicked  Div ....")
  }
  onBtnClick(param) {
    console.log("clicked btn:" + param);
    alert("clicked btn:" + param);
  }
  getClass() {
    return { "square_btn": true, "size-button": true }
  }


  keyupEvent(value) {
    console.log("eventkeyup...." + value)
  }


}
