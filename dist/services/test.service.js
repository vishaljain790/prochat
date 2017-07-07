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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var TestService = (function () {
    function TestService(http) {
        this.http = http;
        this.shalladdsignupandlogin = true;
        this.conversation_update = [];
        console.log("service initialized.....");
    }
    /** singup api */
    TestService.prototype.signUpUser = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/signup/user', body, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    TestService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("body data:-" + body["status"]);
        return body || {};
    };
    TestService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    /**
     * sign up api
     */
    /** get userdetials api */
    TestService.prototype.getUserDetails = function () {
        //let body    = JSON.stringify(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.get('http://localhost:3100/user/getuserdetails', options)
            .map(this.getData)
            .catch(this.handleerror);
    };
    TestService.prototype.getData = function (res) {
        var body = res.json();
        console.log("body data:-" + body["status"]);
        return body || {};
    };
    TestService.prototype.handleerror = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    /**
     * get user details api
     */
    /***login api */
    TestService.prototype.loginUser = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/login/user', body, options)
            .map(this.extractDataforlogin)
            .catch(this.handleErrorObservableforlogin);
    };
    TestService.prototype.extractDataforlogin = function (res) {
        var body = res.json();
        console.log("body data:-" + body["status"]);
        return body || {};
    };
    TestService.prototype.handleErrorObservableforlogin = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    /***login api */
    /***getmessages */
    TestService.prototype.getMessages = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/login/user', body, options)
            .map(this.extractDataformsg)
            .catch(this.handleErrorObservableforgetmsg);
    };
    TestService.prototype.extractDataformsg = function (res) {
        var body = res.json();
        console.log("body data:-" + body["status"]);
        return body || {};
    };
    TestService.prototype.handleErrorObservableforgetmsg = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    /***get messages */
    /***Get whole chatting yet!!! */
    TestService.prototype.getWholeChat = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3100/users/getchatlist', body, options)
            .map(this.extractDataforgetchat)
            .catch(this.handleErrorObservableforgetchat);
    };
    TestService.prototype.extractDataforgetchat = function (res) {
        var body = res.json();
        console.log("body data:-" + body["status"]);
        return body || {};
    };
    TestService.prototype.handleErrorObservableforgetchat = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map