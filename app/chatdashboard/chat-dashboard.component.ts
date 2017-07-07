import { Component, OnInit } from "@angular/core";
import { LocalStorageService }  from 'ng2-webstorage';

import { SiblingService } from "../services/sibling.service";
import { ChatUserListComponent } from "./chatuserlist/chat-user-list.component";
import { ChatService } from "../services/chat.service";
import { ChatBoardComponent  } from "./chatboard/chat-board.component";
@Component({

    selector: "chat-dashboard",
    templateUrl: "./app/chatdashboard/chat-dashboard.component.html",
    styleUrls: ['/chat-dashboard.component.css'],
    providers:[ChatService,SiblingService,ChatBoardComponent]

})

export class ChatDashBoardComponent implements OnInit{



        
        constructor(private chatservice : ChatService,
                    private localstorage : LocalStorageService,
                    private siblingservice : SiblingService    
                                                    ){

                console.log("heyyyy construcotr");
                this.chatservice.setConnection();
               
                  var data={

                                "username": sessionStorage.getItem('username') ,
                                "name"    : sessionStorage.getItem('name')
                        }     
                     
                   this.chatservice.submitUserName(data.username,data.name);



                   
      
        }
            
        ngOnInit() {
                  console.log("hey ngonint");   

                   
        }    
        


}