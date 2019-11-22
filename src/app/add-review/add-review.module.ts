import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReviewPageRoutingModule } from './add-review-routing.module';

import { AddReviewPage } from './add-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReviewPageRoutingModule
  ],
  declarations: [AddReviewPage]
})
export class AddReviewPageModule {}
