import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpDataService{
 
    constructor(private http: Http){ }
     
    getMenuData(lang: string){
        return this.http.get('./lang/lang('+lang +').json')
        		.map((resp:Response)=>{
                            let menuList = resp.json();
                            return menuList;
                        });
    }
}