import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopInfoPageRoutingModule } from './shop-info-routing.module';

import { ShopInfoPage } from './shop-info.page';
import {ShopsProvider} from 'src/providers/shops';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopInfoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ShopInfoPage],
  providers: [ShopsProvider]
})
export class ShopInfoPageModule {}
