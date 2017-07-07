"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var ChatService = (function () {
    function ChatService() {
        // Our localhost address that we set in our server code
        this.url = 'http://localhost:3100';
    }
    ChatService.prototype.setConnection = function () {
        this.socket = io(this.url);
    };
    ChatService.prototype.submitUserName = function (username, name) {
        var data = {
            "username": username,
            "name": name
        };
        this.socket.emit("usernamesubmit", data, function (result) {
            console.log("return msg" + result);
        });
    };
    ChatService.prototype.sendMessage = function (message, to, from) {
        // Make sure the "add-message" is written here because this is referenced in on() in our server
        this.socket.emit('msg', message, to, from);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            //   this.socket = io(this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                // this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map