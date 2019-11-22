import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ShopInfo } from 'src/models/shopInfo.model';

@Component({
  selector: 'app-random-shop',
  templateUrl: './random-shop.page.html',
  styleUrls: ['./random-shop.page.scss'],
})
export class RandomShopPage implements OnInit {
  department: string;
  shopList$: Observable<any>;
  shopNum: number;
  shopInfo$: Observable<ShopInfo>;

  constructor(private shopProvider: ShopsProvider) { 
  }
  
  async getShops(department:string) {
    console.log('Method getShops');
    return this.shopProvider.getShops(department);
  }
  getShopInfo(id:string) {
    this.shopInfo$ = this.shopProvider.getShopInfo(id);
    console.log('method getshopinfo');
  }
  async genShop(department:string) {
    this.shopList$ = await this.getShops(department);
    this.shopList$.subscribe(x => {
      let ranInt = this.randomInt(x.length);
      let shopId = x[ranInt].id;
      this.getShopInfo(shopId);
    })
  }
  saveShopNum(n:number) {
    this.shopNum = n;
  }
  randomInt(maxNum:number) {
    return Math.floor(Math.random() * (maxNum+1));
  }
  ngOnInit() {
  }

}
