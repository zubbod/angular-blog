import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { TestPrimeComponent } from './test-prime/test-prime.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
  {
    path: 'prime',
    component: TestPrimeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TestRoutingModule {}
