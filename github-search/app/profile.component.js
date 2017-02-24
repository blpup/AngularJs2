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
var getData_service_1 = require("./getData.service");
require("rxjs/add/operator/switchMap");
var ProfileComponent = (function () {
    function ProfileComponent(route, getdata) {
        this.route = route;
        this.getdata = getdata;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.getdata.getProfile(+params['id']); }).subscribe(function (user) { return console.log(user); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css'],
        providers: [getData_service_1.getData]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, getData_service_1.getData])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
;
//# sourceMappingURL=profile.component.js.map