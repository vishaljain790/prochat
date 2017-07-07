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
var Subject_1 = require("rxjs/Subject");
var test_service_1 = require("./test.service");
var SiblingService = (function () {
    function SiblingService(testservice) {
        this.testservice = testservice;
        this.subject = new Subject_1.Subject();
        this.subject_userlist = new Subject_1.Subject();
    }
    SiblingService.prototype.sendMessage = function (message, msg, chatstorer) {
        this.subject.next({ name: message,
            username: msg,
            chatstore: chatstorer
        });
    };
    SiblingService.prototype.clearMessage = function () {
        this.subject.next();
    };
    SiblingService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    SiblingService.prototype.setuserlist = function () {
        this.subject_userlist.next(this.testservice.getUserDetails());
        console.log("list of friedns:-" + this.testservice.getUserDetails()[0]);
    };
    SiblingService.prototype.getuserlist = function () {
        return this.subject_userlist.asObservable();
    };
    return SiblingService;
}());
SiblingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [test_service_1.TestService])
], SiblingService);
exports.SiblingService = SiblingService;
//# sourceMappingURL=sibling.service.js.map