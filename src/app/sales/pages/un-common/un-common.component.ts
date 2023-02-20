import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { interval } from 'rxjs';

@Component({
  selector: 'app-un-common',
  templateUrl: './un-common.component.html',
  styles: [],
})
export class UnCommonComponent {
  // i18Select
  name: string = 'Juan Pablo';
  genre: string = 'male';
  invitationMap = {
    male: 'delight',
    female: 'pleasure',
  };

  // i18SelectPlural
  customer: string[] = ['Ivon', 'Juan', 'Pablo', 'Sebas', 'Picon'];
  customerMap = {
    '=0': 'no have costumers waiting',
    '=1': '1 costumer waiting',
    other: 'have # costumers waiting',
  };

  changeCostumer() {
    this.name = 'Ivon';
    this.genre = 'female';
  }

  deleteCostumer() {
    this.customer.pop();
  }

  // KeyValue pipes
  person = {
    name: 'Toro',
    age: 23,
    adress: 'Bucaramanga, Colombia',
  };

  // KeyValue pipes
  heros = [
    {
      name: 'Hulk',
      Fly: false,
    },
    {
      name: 'Spiderman',
      Fly: false,
    },
    {
      name: 'IronMan',
      Fly: true,
    },
  ];

  // Async Pipe
  myObservable = interval(1000);
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data on the promise');
    }, 3500);
  });
}
