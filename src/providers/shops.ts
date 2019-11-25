import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ShopInfo } from 'src/models/shopInfo.model';

@Injectable()
export class ShopsProvider {
    private getShopsUrl = "https://cute-project.herokuapp.com/getshops?department=";
    private getShopInfoUrl = "https://cute-project.herokuapp.com/findshop?id=";
    private writeReviewUrl = "https://cute-project.herokuapp.com/addreview?id=";
    constructor(public http: HttpClient) {}

    async getShops(department:string){
        return this.http.get(this.getShopsUrl+department);
    }

    async getShopInfo(id:string) {
        return this.http.get<ShopInfo>(this.getShopInfoUrl+id);
    }
    async addReview(id:string, user:string, rating:string, des:string) {
        this.http.get(this.writeReviewUrl+id+'&name='+user+'&rating='+rating+'&description='+des).subscribe(res => console.log(res));
    }
}