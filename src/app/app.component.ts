import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string = 'Juan Pablo';
  value: number = 10000;
  obj = {
    name: 'torito',
  };

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
