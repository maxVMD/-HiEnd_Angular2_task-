"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var password_match_directive_1 = require("./password.match.directive");
var common_1 = require("@angular/common");
var ngx_webstorage_1 = require("ngx-webstorage");
var app_component_1 = require("./app.component");
var registration_component_1 = require("./registration.component");
var confirmation_component_1 = require("./confirmation.component");
var not_found_component_1 = require("./not-found.component");
var data_service_1 = require("./data.service");
var appRoutes = [
    { path: '', component: registration_component_1.RegistrationComponent },
    { path: 'confirmation/:username', component: confirmation_component_1.ConfirmationComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ngx_webstorage_1.Ng2Webstorage, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, registration_component_1.RegistrationComponent, confirmation_component_1.ConfirmationComponent, not_found_component_1.NotFoundComponent, password_match_directive_1.EqualValidator],
        bootstrap: [app_component_1.AppComponent],
        providers: [data_service_1.HttpDataService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map