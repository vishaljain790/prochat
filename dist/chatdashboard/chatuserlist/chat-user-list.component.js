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
var ng2_webstorage_1 = require("ng2-webstorage");
var test_service_1 = require("../../services/test.service");
var sibling_service_1 = require("../../services/sibling.service");
var chat_service_1 = require("../../services/chat.service");
var chat_board_component_1 = require("../chatboard/chat-board.component");
var ChatUserListComponent = (function () {
    function ChatUserListComponent(testService, localstorage, chatboard, siblingservice, chatservice, zone) {
        var _this = this;
        this.testService = testService;
        this.localstorage = localstorage;
        this.chatboard = chatboard;
        this.siblingservice = siblingservice;
        this.chatservice = chatservice;
        this.zone = zone;
        this.socket = null;
        this.currentUsername = sessionStorage.getItem('name');
        testService.getUserDetails().subscribe(function (result) {
            //  console.log("data coming into this:- "+ result);
            _this.userdetails = result;
        });
        chatservice.socket.on("connectionupdate", function (data) {
            // this.statustongoncheck = true;
            testService.statusforcurrentupadte = true;
            // console.log("hey u got changes:-"+data+ testService.statusforcurrentupadte);
        });
    }
    ChatUserListComponent.prototype.ngOnInit = function () {
    };
    ChatUserListComponent.prototype.ngOnChanges = function () {
        //  console.log("inside ngonchnages");
    };
    ChatUserListComponent.prototype.ngDoCheck = function () {
        //onsole.log("here you go!!"+ this.testService.statusforcurrentupadte); 
        var _this = this;
        if (this.testService.statusforcurrentupadte) {
            this.testService.getUserDetails().subscribe(function (result) {
                //  console.log("data coming into this:- "+ result);
                _this.userdetails = result;
                _this.testService.statusforcurrentupadte = false;
            });
        }
    };
    ChatUserListComponent.prototype.dedicateduser = function (dedicatedname, dedicatedusername) {
        var _this = this;
        var data = {
            "fromusername": sessionStorage.getItem("username"),
            "tousername": dedicatedusername
        };
        var chatstore;
        this.testService.getWholeChat(data).subscribe(function (result) {
            chatstore = result;
            _this.siblingservice.sendMessage(dedicatedname, dedicatedusername, chatstore);
        });
    };
    return ChatUserListComponent;
}());
ChatUserListComponent = __decorate([
    core_1.Component({
        selector: "chat-user-list",
        templateUrl: "./app/chatdashboard/chatuserlist/chat-user-list.component.html",
        styleUrls: ['./app/chatdashboard/chatuserlist/chat-user-list.component.css'],
    }),
    __metadata("design:paramtypes", [test_service_1.TestService,
        ng2_webstorage_1.LocalStorageService,
        chat_board_component_1.ChatBoardComponent,
        sibling_service_1.SiblingService,
        chat_service_1.ChatService,
        core_1.NgZone])
], ChatUserListComponent);
exports.ChatUserListComponent = ChatUserListComponent;
//# sourceMappingURL=chat-user-list.component.js.map