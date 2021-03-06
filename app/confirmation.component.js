"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("./data.service");
var ngx_webstorage_1 = require("ngx-webstorage");
var ConfirmationComponent = (function () {
    function ConfirmationComponent(route, httpService, localSt) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.localSt = localSt;
        this.staticMenu = [];
        var lang = localSt.retrieve('langCode');
        if (lang) {
            this.httpService.getMenuData(lang).subscribe(function (data) { _this.staticMenu = data; });
            if (lang == "en") {
                this.isLangEn = true;
            }
            else {
                this.isLangEn = false;
            }
        }
        else {
            this.localSt.store('langCode', 'en');
            this.httpService.getMenuData(lang).subscribe(function (data) { _this.staticMenu = data; });
            this.isLangEn = true;
        }
        ;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.name = params.username;
        });
    }
    ConfirmationComponent.prototype.changeLang = function (lang) {
        var _this = this;
        this.localSt.store('langCode', lang);
        this.httpService.getMenuData(lang).subscribe(function (data) { _this.staticMenu = data; });
        if (lang == "en") {
            this.isLangEn = true;
        }
        else {
            this.isLangEn = false;
        }
    };
    ConfirmationComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    core_1.Component({
        selector: 'confirm',
        templateUrl: 'views/confirmation.html',
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.HttpDataService, ngx_webstorage_1.LocalStorageService])
], ConfirmationComponent);
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map