import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  inMayus: boolean = true;
  sortBy: string = '';
  heroes: Hero[] = [
    {
      name: 'IronMan',
      fly: true,
      color: Color.red
    },
    {
      name: 'Hulk',
      fly: false,
      color: Color.green
    },
    {
      name: 'Captain America',
      fly: false,
      color: Color.blue
    },
    {
      name: 'Black Panter',
      fly: false,
      color: Color.black
    },
    {
      name: 'Thor',
      fly: true,
      color: Color.blue
    }

  ];

  changeOrder( value: string){
    this.sortBy = value
  }

  changeMayus() {
    this.inMayus = !this.inMayus;
  }
}
