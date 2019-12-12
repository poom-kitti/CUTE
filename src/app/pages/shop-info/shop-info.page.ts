import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ShopInfo } from 'src/models/shopInfo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.page.html',
  styleUrls: ['./shop-info.page.scss'],
})
export class ShopInfoPage implements OnInit {
  department: string;
  oldDepartmentUrl: string;
  newDepartmentUrl: string;
  shopList$: Observable<any>;
  shopId: string;
  oldShopIdUrl: string;
  newShopIdUrl: string;
  shopInfo$: Observable<ShopInfo>;
  avgRating: number;
  
  constructor(private shopProvider: ShopsProvider, private activatedRoute: ActivatedRoute, private router: Router) { }

  async getShops(department:string) {
    this.shopList$ = await this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  async getShopInfo(id:string) {
    this.avgRating=0;
    this.shopInfo$ = await this.shopProvider.getShopInfo(id);
    this.shopInfo$.pipe(take(1)).subscribe(x => {
      if(x.review.length !== 0) {
        let totalStars = 0;
        let count=0
        for(let i=0; i<x.review.length; i++){
          totalStars+=x.review[i].rating;
          count+=1;
        }
        this.avgRating=Math.round(totalStars/count);
    }});
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
  goReview() {
    this.shopInfo$.pipe(take(1)).subscribe(x => this.router.navigateByUrl('/main/tab/review/'+x.location+'/'+x.id));
  }
  goHome() {
    this.router.navigateByUrl('main/tab/home');
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    if (this.activatedRoute.snapshot.paramMap.get('department')) {
      if (!this.oldDepartmentUrl) this.oldDepartmentUrl = this.activatedRoute.snapshot.paramMap.get('department');
      else this.newDepartmentUrl = this.activatedRoute.snapshot.paramMap.get('department');
    } 
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      if (!this.oldShopIdUrl) this.oldShopIdUrl = this.activatedRoute.snapshot.paramMap.get('id');
      else this.newShopIdUrl = this.activatedRoute.snapshot.paramMap.get('id');
    } 
    if (this.oldShopIdUrl && !this.newShopIdUrl && this.oldDepartmentUrl && !this.newDepartmentUrl) {
      this.department = this.oldDepartmentUrl;
      this.shopId = this.oldShopIdUrl;
      this.getShopInfo(this.shopId);
    }
    else if (this.oldDepartmentUrl != this.newDepartmentUrl || this.oldShopIdUrl != this.newShopIdUrl) {
      this.department = this.newDepartmentUrl;
      this.shopId = this.newShopIdUrl;
      this.getShopInfo(this.shopId);
    }
  }
}
