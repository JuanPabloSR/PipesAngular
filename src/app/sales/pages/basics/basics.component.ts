import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'juan pablo';
  nameUpper: string = 'JUAN PABLO';
  nameComplete: string = 'jUaN pAbLo SaNcHez';

  date: Date = new Date();


}
