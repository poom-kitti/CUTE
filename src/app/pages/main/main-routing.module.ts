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
        loadChildren: '../random-shop/random-shop.module#RandomShopPageModule'
      },
      {
        path: 'shop',
        loadChildren: '../shop-info/shop-info.module#ShopInfoPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home-page/home-page.module#HomePagePageModule'
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
