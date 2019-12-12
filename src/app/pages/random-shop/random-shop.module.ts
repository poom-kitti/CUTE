import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomShopPageRoutingModule } from './random-shop-routing.module';

import { RandomShopPage } from './random-shop.page';
import {ShopsProvider} from 'src/providers/shops';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomShopPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RandomShopPage],
  providers: [ShopsProvider]
})
export class RandomShopPageModule {}
