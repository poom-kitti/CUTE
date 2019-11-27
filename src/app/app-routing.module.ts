import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'random-shop',
    loadChildren: () => import('./pages/random-shop/random-shop.module').then( m => m.RandomShopPageModule)
  },
  {
    path: 'shop-info',
    loadChildren: () => import('./pages/shop-info/shop-info.module').then( m => m.ShopInfoPageModule)
  },
  {
    path: 'add-review',
    loadChildren: () => import('./pages/add-review/add-review.module').then( m => m.AddReviewPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
