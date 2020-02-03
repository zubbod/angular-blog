import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/modules/primeng.module';

import { TestComponent } from './test.component';
import { TestRoutingModule } from './test.routing.module';
import { TestPrimeComponent } from './test-prime/test-prime.component';
import { SharedModule } from '../shared/modules/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TestComponent, TestPrimeComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    PrimengModule,
    SharedModule,
    FormsModule,
  ]
})
export class TestModule { }
