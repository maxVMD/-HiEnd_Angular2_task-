import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { HttpDataService} from './data.service';
import {LocalStorageService} from 'ngx-webstorage';
import {StaticMenu}	from './static.menu'

  
@Component({
    selector: 'confirm',
    templateUrl: 'views/confirmation.html',
    providers: []
})
export class ConfirmationComponent implements OnDestroy{ 

    name:string;
    isLangEn: boolean;

    staticMenu: StaticMenu [] = [];

    private routeSubscription: Subscription;

    changeLang(lang:string){

        this.localSt.store('langCode', lang);    
        this.httpService.getMenuData(lang).subscribe((data: any) => {this.staticMenu = data});
        if(lang == "en"){
            this.isLangEn = true;
        }
        else{
            this.isLangEn = false;
        }
    }


    constructor(private route: ActivatedRoute, private httpService: HttpDataService, private localSt:LocalStorageService){

        let lang = localSt.retrieve('langCode');

        if(lang){
            this.httpService.getMenuData(lang).subscribe((data: any) => {this.staticMenu = data});
                if(lang == "en"){
                    this.isLangEn = true;
                }
                else{
                    this.isLangEn = false;
                }
            }
        else{
            this.localSt.store('langCode', 'en');
            this.httpService.getMenuData(lang).subscribe((data: any) => {this.staticMenu = data});
            this.isLangEn = true;
            };
           
        this.routeSubscription = this.route.params.subscribe((params: any) => {
            this.name = params.username;
        });

    }


    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}