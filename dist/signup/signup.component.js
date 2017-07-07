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
var test_service_1 = require("../services/test.service");
var router_1 = require("@angular/router");
var ng2_webstorage_1 = require("ng2-webstorage");
var global_service_1 = require("../services/global.service");
var SignUpComponent = (function () {
    function SignUpComponent(testService, router, globalservice1, storage) {
        this.testService = testService;
        this.router = router;
        this.globalservice1 = globalservice1;
        this.storage = storage;
        this.signupres = false;
        this.formBlank = false;
        this.formBlankmsg = "Some of fields seem blank!!";
        this.testService = testService;
        this.globalservice = globalservice1;
        // this.router       = Router;
    }
    SignUpComponent.prototype.onClickMe = function () {
        var _this = this;
        console.log("clicked me!!" + this.nameval + this.usernameval + this.password);
        var userinfo = {
            name: this.nameval,
            username: this.usernameval,
            password: this.password
        };
        if (!this.nameval || !this.usernameval || !this.password) {
            this.formBlank = true;
            this.formBlankmsg = "Some of fields seem blank!!";
        }
        if (this.nameval && this.usernameval && this.password) {
            this.testService.signUpUser(userinfo)
                .subscribe(function (result) {
                console.log("from server:-" + result["status"] + "///" + result["msg"]);
                if (result["status"] == true) {
                    //  this.storage.store('name', this.nameval);
                    //  this.storage.store('username', this.usernameval);
                    sessionStorage.setItem('name', _this.nameval);
                    sessionStorage.setItem('username', _this.usernameval);
                    _this.router.navigate(['./chat-dashboard']);
                    _this.testService.shalladdsignupandlogin = false;
                }
                else {
                    _this.formBlankmsg = result["msg"];
                }
            });
        }
    };
    return SignUpComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SignUpComponent.prototype, "nameval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SignUpComponent.prototype, "usernameval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SignUpComponent.prototype, "password", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        selector: "signup-app",
        templateUrl: "./app/signup/signup.component.html",
        providers: [test_service_1.TestService],
        styleUrls: ['./app/signup/signup.component.css']
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.Router,
        global_service_1.GlobalService,
        ng2_webstorage_1.LocalStorageService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map