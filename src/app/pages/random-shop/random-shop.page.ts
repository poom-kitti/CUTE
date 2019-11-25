import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ShopInfo } from 'src/models/shopInfo.model';
import { AlertController } from '@ionic/angular';


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

  constructor(private shopProvider: ShopsProvider, public alertController: AlertController) { 
  }
  
  async getShops(department:string) {
    console.log('Method getShops');
    return await this.shopProvider.getShops(department);
  }
  async getShopInfo(id:string) {
    this.shopInfo$ = await this.shopProvider.getShopInfo(id);
    console.log('method getshopinfo');
  }
  async genShop(department:string) {
    if(this.department != null){
      this.shopList$ = await this.getShops(department);
      this.shopList$.subscribe(x => {
      let ranInt = this.randomInt(x.length);
      let shopId = x[ranInt].id;
      this.getShopInfo(shopId);
    });
    }
    else this.errorAlert();
  }
  saveShopNum(n:number) {
    this.shopNum = n;
  }
  randomInt(maxNum:number) {
    return Math.floor(Math.random() * (maxNum+1));
  }
  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Location Unselected',
      message: 'Please select a location',
      buttons: [{
        text: 'Okay',
        role: 'cancel',
      }]
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
