import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UnCommonComponent } from './pages/un-common/un-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

@NgModule({
  declarations: [
    NumbersComponent,
    UnCommonComponent,
    BasicsComponent,
    SortComponent,
  ],
  exports: [
    NumbersComponent,
    UnCommonComponent,
    BasicsComponent,
    SortComponent,
  ],
  imports: [CommonModule],
})
export class SalesModule {}
