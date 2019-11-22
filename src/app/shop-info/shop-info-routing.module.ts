import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopInfoPage } from './shop-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShopInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopInfoPageRoutingModule {}
