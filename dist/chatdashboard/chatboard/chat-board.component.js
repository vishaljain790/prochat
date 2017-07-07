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
var test_service_1 = require("../../services/test.service");
var sibling_service_1 = require("../../services/sibling.service");
var chat_service_1 = require("../../services/chat.service");
var ChatBoardComponent = (function () {
    function ChatBoardComponent(siblingservice, chatservice, testservice) {
        this.siblingservice = siblingservice;
        this.chatservice = chatservice;
        this.testservice = testservice;
        this.socket = null;
        this.dedicatedname = "nouser";
        this.messages = [];
        this.message = '';
        this.appendelm = "";
        this.conversationmain = [];
        this.addrow = "plain";
        this.isdatacoming = false;
        this.addrow = new String();
        this.datacoming = new String();
        this.chatservice.socket.on("chatUpdate", function (msgval, fromusername, tousername) {
            // console.log("here you get msg:- "+ msgval + "//"+ this.addrow);
            // this.rightrightnowmsg = "1";
            // this.rightrightnowmsg = "msgval";
            testservice.datacoming = msgval;
            testservice.isdatacoming = true;
            testservice.currentusername = tousername;
            // // this.message= "";
            // // this.addrow = "1";
            // // this.currentmessagevalue = msgval;
        });
    }
    ChatBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.siblingservice.getMessage().subscribe(function (message) {
            if (message != null) {
                _this.dedicatedname = message.name;
                _this.dedicatedusername = message.username;
                _this.conversation = message.chatstore;
            }
            else {
                console.log("message is null");
            }
        });
    };
    ChatBoardComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.siblingservice.getMessage().subscribe(function (message) {
            _this.dedicatedname = message.name;
            _this.dedicatedusername = message.username;
            _this.conversation = message.chatstore;
        });
    };
    ChatBoardComponent.prototype.sendmsg = function (msgvaltoshow) {
        this.chatservice.sendMessage(this.message, this.dedicatedusername, sessionStorage.getItem('username'));
        this.message = '';
        var data = {
            "fromusername": sessionStorage.getItem('username'),
            "message": msgvaltoshow
        };
        this.conversation.push(data);
        // this. siblingservice.getMessage().subscribe(message => { 
        //         if(message!=null){
        //                 this.dedicatedname = message.name; 
        //                 this.dedicatedusername = message.username;
        //                 this.conversation     = message.chatstore;
        //         }
        //         else{
        //             console.log("message is null");
        //         }       
        //      }); 
    };
    ChatBoardComponent.prototype.keypressHandler = function (event) {
        if (event.keyCode === 13) {
            this.sendmsg(this.message);
        }
    };
    ChatBoardComponent.prototype.ngDoCheck = function () {
        if (this.testservice.isdatacoming) {
            console.log("yes inside if");
            var data = {
                "fromusername": this.testservice.currentusername,
                "message": this.testservice.datacoming
            };
            this.conversation.push(data);
            this.testservice.isdatacoming = false;
            this.testservice.datacoming = "";
        }
        else {
            console.log("inside else");
        }
    };
    return ChatBoardComponent;
}());
ChatBoardComponent = __decorate([
    core_1.Component({
        selector: "chat-board",
        templateUrl: "./app/chatdashboard/chatboard/chat-board.component.html",
        styleUrls: ['./app/chatdashboard/chatboard/chat-board.component.css'],
    }),
    __metadata("design:paramtypes", [sibling_service_1.SiblingService,
        chat_service_1.ChatService,
        test_service_1.TestService])
], ChatBoardComponent);
exports.ChatBoardComponent = ChatBoardComponent;
//     this.currentname = sessionStorage.getItem('name');
//     this.currentusername=sessionStorage.getItem('username');
//     console.log(this.dedicatedusername+"//"+this.currentusername+"////////.......");
//    // this.conversation = new Array(); 
//    if(this.collectionofarray == null){
//         this.collectionofarray = new Object();
//          console.log("collections of object created first time!!");
//    }
//    else{
//        console.log("collections of object created already!!");
//    }
//    let propername = this.dedicatedusername+this.currentusername;
//     this.conversation = propername;
//     if(this.collectionofarray.propername!=null){
//         console.log("sorry you exist already!!!"+ propername);
//     }else{
//         console.log("you don't exist!!!"+this.collectionofarray.propername+propername );
//         this.collectionofarray.propername = new Array();
//         // console.log("you don't exist!!!"+this.collectionofarray.propername );
//     }
//console.log("checling:- "+ this.addrow);
// if(this.testservice.isdatacoming ){
//     console.log("inside if part"+ this.testservice.datacoming+ "///"+ this.conversation);    
//     //this.conversation.push(this.testservice.datacoming);
//     this.collectionofarray[this.conversation].push(this.testservice.datacoming);
//     console.log(this.collectionofarray[this.conversation][0]);
//     this.testservice.isdatacoming = false;
//     this.message = "";
// }
// else{
// //  console.log("checling:- "+ this.dedicatedname == this.testservice.currentusername +"//"+ this.dedicatedname+"//"+this.testservice.currentusername);
// } 
//# sourceMappingURL=chat-board.component.js.map