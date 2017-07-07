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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var test_service_1 = require("../services/test.service");
var LoginComponent = (function () {
    function LoginComponent(testservice, router) {
        this.testservice = testservice;
        this.router = router;
        this.formBlank = false;
        this.formBlankmsg = "Some of fields seem blank!!";
    }
    LoginComponent.prototype.onClickMeForLogin = function () {
        var _this = this;
        var userinfo = {
            username: this.usernamevaltologin,
            password: this.passvaltologin
        };
        if (!this.usernamevaltologin || !this.passvaltologin) {
            this.formBlank = true;
            this.formBlankmsg = "Some of fields seem blank!!";
        }
        if (this.usernamevaltologin && this.passvaltologin) {
            this.testservice.loginUser(userinfo)
                .subscribe(function (result) {
                if (result["status"] == true) {
                    sessionStorage.setItem('username', _this.usernamevaltologin);
                    sessionStorage.setItem('name', result.msg.name);
                    _this.router.navigate(['./chat-dashboard']);
                    _this.testservice.shalladdsignupandlogin = false;
                }
                else {
                    _this.formBlankmsg = result["msg"];
                }
            });
        }
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "usernamevaltologin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "passvaltologin", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "./app/login/login.component.html",
        styleUrls: ['./app/login/login.component.css'],
        providers: [test_service_1.TestService]
    }),
    __metadata("design:paramtypes", [test_service_1.TestService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map