import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule } from '@angular/router';
import { EqualValidator } from './password.match.directive';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';


import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent }  from './app.component';
import { RegistrationComponent }   from './registration.component';
import { ConfirmationComponent }   from './confirmation.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpDataService }   from './data.service';

const appRoutes: Routes =[
    { path: '', component: RegistrationComponent},
    { path: 'confirmation/:username', component: ConfirmationComponent },
    { path: '**', component: NotFoundComponent }
    
];

 
@NgModule({
    imports:      [ BrowserModule, Ng2Webstorage, FormsModule,  HttpModule,  RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, RegistrationComponent,  ConfirmationComponent,  NotFoundComponent, EqualValidator],
    bootstrap:    [ AppComponent ],
    providers:	  [HttpDataService , {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }