import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UnCommonComponent } from './pages/un-common/un-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyCasePipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';
@NgModule({
  declarations: [
    NumbersComponent,
    UnCommonComponent,
    BasicsComponent,
    SortComponent,
    UppercasePipe,
    FlyCasePipe,
    SortPipe,
  ],
  exports: [
    NumbersComponent,
    UnCommonComponent,
    BasicsComponent,
    SortComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
