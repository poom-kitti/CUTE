import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  department: string;
  shopList$: Observable<any>;
  review$: Observable<any>;
  shopId: string;
  user: string;
  rating: string;
  des: string;

  constructor(private shopProvider: ShopsProvider) { }
  
  getShops(department:string) {
    this.shopList$ = this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  addReview(){
    let wnd = window.open(this.shopProvider.addReviewUrl(this.shopId,this.user,this.rating,this.des));
    setTimeout(function() {
      wnd.close();
    }, 1000);
  }
  ngOnInit() {
  }

}
