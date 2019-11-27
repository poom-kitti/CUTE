import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tab',
    component: MainPage,
    children: [
      {
        path: 'random',
        loadChildren: () => import('../random-shop/random-shop.module').then(m => m.RandomShopPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop-info/shop-info.module').then(m => m.ShopInfoPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home-page/home-page.module').then( m => m.HomePagePageModule)
      },
      {
        path: 'review',
        loadChildren: () => import('../add-review/add-review.module').then(m => m.AddReviewPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
