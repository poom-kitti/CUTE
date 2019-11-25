import { Component, OnInit } from '@angular/core';
import { ShopsProvider } from 'src/providers/shops';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  department: string;
  shopList$: Observable<any>;
  shopId: string;
  user: string;
  rating: string;
  des: string = '';

  constructor(private shopProvider: ShopsProvider, public toastController: ToastController, public alertController: AlertController) { }

  async getShops(department:string) {
    this.shopList$ = await this.shopProvider.getShops(department);
    console.log('Method getShops');
  }
  async addReview(){
    if (this.shopId != null && this.user != null && this.user != '' && this.rating != null){
      await this.shopProvider.addReview(this.shopId, this.user, this.rating, this.des);
      await this.toastMessage();
      this.user = null;
      this.rating = null;
      this.des = null;
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
  ngOnInit() {
  }
}
