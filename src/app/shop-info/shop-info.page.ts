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
  shopId: number;
  shopInfo$: Observable<ShopInfo>;
  
  constructor(private shopProvider: ShopsProvider) { }

  getShops(department:string) {
    this.shopList$ = this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  getShopInfo(id:string) {
    this.shopInfo$ = this.shopProvider.getShopInfo(id);
    console.log('method getshopinfo');
  }
  
  ngOnInit() {
  }

}
