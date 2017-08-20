import { Component, OnInit} from '@angular/core';
import { HttpDataService} from './data.service';
import {StaticMenu} from './static.menu';
import {LocalStorageService} from 'ngx-webstorage';
import {User} from './user';

  
@Component({
    selector: 'registration',
    templateUrl:  'views/registration.html',
})
export class RegistrationComponent implements OnInit {

	isLangEn: boolean;
	staticMenu: StaticMenu [] = [];
	public user: User;


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

	

	constructor( private httpService: HttpDataService, private localSt:LocalStorageService){

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

	}

	ngOnInit() {
	    this.user = {
	      name: '',
	      login: '',
	      email: '',
	      password: '',
	      confPass: ''
	    }
	    

  	}
  	
  	save(model: User) {
    console.log(model);
  }

 }