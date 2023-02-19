import { Component } from '@angular/core';

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
}
