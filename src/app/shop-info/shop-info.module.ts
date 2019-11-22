import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopInfoPageRoutingModule } from './shop-info-routing.module';

import { ShopInfoPage } from './shop-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopInfoPageRoutingModule
  ],
  declarations: [ShopInfoPage]
})
export class ShopInfoPageModule {}
