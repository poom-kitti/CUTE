import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  department: string;
  oldDepartmentUrl: string;
  newDepartmentUrl: string;
  shopList$: Observable<any>;
  shopId: string;
  oldShopIdUrl: string;
  newShopIdUrl: string;
  user: string;
  rating: string = '5';
  des: string = '';
  returnURL: string = '/main/tab/shop';

  constructor(private shopProvider: ShopsProvider, private toastController: ToastController, private alertController: AlertController,
    private route: ActivatedRoute, private router: Router) { }

  async getShops(department:string) {
    this.shopList$ = await this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  async addReview(){
    if (this.shopId != null && this.user != null && this.user != '' && this.rating != null){
      await this.shopProvider.addReview(this.shopId, this.user, this.rating, this.des);
      await this.toastMessage();
      this.user = null;
      this.rating = '5';
      this.des = null;
      this.returnURL = '/main/tab/shop/'+this.department+'/'+this.shopId;
    }
    else this.errorAlert();
  }
  async toastMessage() {
    const toast = await this.toastController.create({
      header: 'Success!',
      message: 'Your review has been added',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Unsuccessful',
      message: 'Some information is left unfilled',
      buttons: [{
        text: 'Okay',
        role: 'cancel',
      }]
    });
    await alert.present();
  }
  updateStar($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.rating=$event.newValue.toString();
  }
  goHome() {
    this.router.navigateByUrl('main/tab/home');
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (this.route.snapshot.paramMap.get('department')) {
      if (!this.oldDepartmentUrl) this.oldDepartmentUrl = this.route.snapshot.paramMap.get('department');
      else this.newDepartmentUrl = this.route.snapshot.paramMap.get('department');
    } 
    if (this.route.snapshot.paramMap.get('id')) {
      if (!this.oldShopIdUrl) this.oldShopIdUrl = this.route.snapshot.paramMap.get('id');
      else this.newShopIdUrl = this.route.snapshot.paramMap.get('id');
    } 
    if (this.oldShopIdUrl && !this.newShopIdUrl && this.oldDepartmentUrl && !this.newDepartmentUrl) {
      this.department = this.oldDepartmentUrl;
      this.shopId = this.oldShopIdUrl;
      this.returnURL = '/main/tab/shop/'+this.department+'/'+this.shopId;
    }
    else if (this.oldDepartmentUrl != this.newDepartmentUrl || this.oldShopIdUrl != this.newShopIdUrl) {
      this.department = this.newDepartmentUrl;
      this.shopId = this.newShopIdUrl;
      this.returnURL = '/main/tab/shop/'+this.department+'/'+this.shopId;
    }
  }
}
