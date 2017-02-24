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
var getData_service_1 = require("./getData.service");
var SearchComponent = (function () {
    function SearchComponent(getdata) {
        this.getdata = getdata;
    }
    SearchComponent.prototype.onSelect = function (num) {
        this.selectedNumber = num;
    };
    ;
    SearchComponent.prototype.returnData = function (s) {
        var _this = this;
        this.getdata.getHub(s).then(function (res) { return _this.data = res.items; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
        providers: [getData_service_1.getData]
    }),
    __metadata("design:paramtypes", [getData_service_1.getData])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map