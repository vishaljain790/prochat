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
var sibling_service_1 = require("../services/sibling.service");
var chat_service_1 = require("../services/chat.service");
var chat_board_component_1 = require("./chatboard/chat-board.component");
var ChatDashBoardComponent = (function () {
    function ChatDashBoardComponent(chatservice, localstorage, siblingservice) {
        this.chatservice = chatservice;
        this.localstorage = localstorage;
        this.siblingservice = siblingservice;
        console.log("heyyyy construcotr");
        this.chatservice.setConnection();
        var data = {
            "username": sessionStorage.getItem('username'),
            "name": sessionStorage.getItem('name')
        };
        this.chatservice.submitUserName(data.username, data.name);
    }
    ChatDashBoardComponent.prototype.ngOnInit = function () {
        console.log("hey ngonint");
    };
    return ChatDashBoardComponent;
}());
ChatDashBoardComponent = __decorate([
    core_1.Component({
        selector: "chat-dashboard",
        templateUrl: "./app/chatdashboard/chat-dashboard.component.html",
        styleUrls: ['/chat-dashboard.component.css'],
        providers: [chat_service_1.ChatService, sibling_service_1.SiblingService, chat_board_component_1.ChatBoardComponent]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        ng2_webstorage_1.LocalStorageService,
        sibling_service_1.SiblingService])
], ChatDashBoardComponent);
exports.ChatDashBoardComponent = ChatDashBoardComponent;
//# sourceMappingURL=chat-dashboard.component.js.map