import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
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

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
