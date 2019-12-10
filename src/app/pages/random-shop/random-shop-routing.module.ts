import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomShopPage } from './random-shop.page';

const routes: Routes = [
  {
    path: '',
    component: RandomShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomShopPageRoutingModule {}
