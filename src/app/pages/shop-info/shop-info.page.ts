import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ShopInfo } from 'src/models/shopInfo.model';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.page.html',
  styleUrls: ['./shop-info.page.scss'],
})
export class ShopInfoPage implements OnInit {
  department: string;
  shopList$: Observable<any>;
  shopId: string;
  shopInfo$: Observable<ShopInfo>;
  
  constructor(private shopProvider: ShopsProvider) { }

  async getShops(department:string) {
    this.shopList$ = await this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  async getShopInfo(id:string) {
    this.shopInfo$ = await this.shopProvider.getShopInfo(id);
    console.log('method getshopinfo');
  }
  async doRefresh(event) {
    console.log('Do refresh');
    await this.getShopInfo(this.shopId);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {
  }

}
