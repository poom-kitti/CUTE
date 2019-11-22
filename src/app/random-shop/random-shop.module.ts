import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomShopPageRoutingModule } from './random-shop-routing.module';

import { RandomShopPage } from './random-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomShopPageRoutingModule
  ],
  declarations: [RandomShopPage]
})
export class RandomShopPageModule {}
