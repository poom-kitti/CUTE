import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReviewPageRoutingModule } from './add-review-routing.module';

import { AddReviewPage } from './add-review.page';
import {ShopsProvider} from 'src/providers/shops';
import {HttpClientModule} from '@angular/common/http';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReviewPageRoutingModule,
    HttpClientModule,
    RatingModule
  ],
  declarations: [AddReviewPage],
  providers: [ShopsProvider]
})
export class AddReviewPageModule {}
