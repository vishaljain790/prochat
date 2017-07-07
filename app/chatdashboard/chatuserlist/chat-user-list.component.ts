import { Component, OnInit, OnChanges, NgZone,DoCheck } from "@angular/core";
import { LocalStorageService }  from 'ng2-webstorage';
import { TestService } from "../../services/test.service";
import { SiblingService } from "../../services/sibling.service";

import { ChatService } from "../../services/chat.service";
import { ChatBoardComponent } from "../chatboard/chat-board.component";

@Component({

    selector: "chat-user-list",
    
    templateUrl: "./app/chatdashboard/chatuserlist/chat-user-list.component.html",
    styleUrls: ['./app/chatdashboard/chatuserlist/chat-user-list.component.css'],
    
    //providers: [TestService]


})


export class ChatUserListComponent implements OnInit, OnChanges,DoCheck{


    userdetails:any;
    currentUsername : string;
    socket = null;
    statustongoncheck:boolean;
    

    constructor(public testService : TestService,
                private localstorage : LocalStorageService,
                private chatboard : ChatBoardComponent,
                private siblingservice : SiblingService,
                public chatservice : ChatService,
                private zone:NgZone   

                ){
        
            
                     
                        this.currentUsername = sessionStorage.getItem('name');
                        testService.getUserDetails().subscribe(
        
        
                        result => {
                                
                              //  console.log("data coming into this:- "+ result);
                                this.userdetails = result;
        
                        })
        
                            chatservice.socket.on("connectionupdate", function(data){
                
                                       // this.statustongoncheck = true;
                                        testService.statusforcurrentupadte = true;
                                       // console.log("hey u got changes:-"+data+ testService.statusforcurrentupadte);
                                    
                            })
        

            }


    

    ngOnInit() {
      
        
    }


    ngOnChanges() {
        
                //  console.log("inside ngonchnages");
    }

    ngDoCheck() {
       
    //onsole.log("here you go!!"+ this.testService.statusforcurrentupadte); 

       if(this.testService.statusforcurrentupadte ){
              this.testService.getUserDetails().subscribe(
    
                    result => {
                            
                          //  console.log("data coming into this:- "+ result);
                            this.userdetails = result;
                            this.testService.statusforcurrentupadte = false;
                    }
    
    
                )
       }
        
    }
    dedicateduser(dedicatedname,dedicatedusername){
                 

                 var data = {

                     "fromusername": sessionStorage.getItem("username"),
                     "tousername" : dedicatedusername
                 }

                 let chatstore :any;

                 this.testService.getWholeChat(data).subscribe(
        
                        result => {
                                
                             
                                chatstore = result;
                                 this.siblingservice.sendMessage(dedicatedname,dedicatedusername,chatstore);    
                        }) 
               
    }
}