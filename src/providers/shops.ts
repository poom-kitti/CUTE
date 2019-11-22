import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ShopInfo } from 'src/models/shopInfo.model';

@Injectable()
export class ShopsProvider {
    private getShopsUrl = "https://cute-project.herokuapp.com/getshops?department=";
    private getShopInfoUrl = "https://cute-project.herokuapp.com/findshop?id=";
    constructor(public http: HttpClient) {}

    getShops(department:string){
        return this.http.get(this.getShopsUrl+department);
    }

    getShopInfo(id:string) {
        return this.http.get<ShopInfo>(this.getShopInfoUrl+id);
    }
}