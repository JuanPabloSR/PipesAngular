import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  inMayus: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMayus() {
    this.inMayus = !this.inMayus;
  }
}
