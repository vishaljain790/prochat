import { Component,OnInit,OnChanges,ElementRef, DoCheck} from "@angular/core";


import { TestService } from "../../services/test.service";
import { SiblingService } from "../../services/sibling.service";
import { ChatService } from "../../services/chat.service";

@Component({

    selector: "chat-board",
    templateUrl: "./app/chatdashboard/chatboard/chat-board.component.html",
    styleUrls: ['./app/chatdashboard/chatboard/chat-board.component.css'],
   // providers:[TestService]

})

export class ChatBoardComponent implements OnInit, OnChanges,DoCheck{

                socket = null;
                dedicatedname: string= "nouser";
                dedicatedusername: string;
                messages : Array<string>=[];
                message ='';
                connection;
            
                appendelm: string = "";
                
                conversationmain = [];
                datacoming:String;
                isdatacoming:boolean;
                conversation:any;
                currentname;
                currentusername;
                collectionofarray;    
                addrow:String="plain";
                rightrightnowmsg;
                rightmsg;
               

                constructor(private siblingservice : SiblingService,
                            private chatservice : ChatService,
                            private testservice : TestService
                                
                            ){
                        
                            this.isdatacoming = false;
                            this.addrow = new String();  
                           
                            this.datacoming       = new String();   
                            this.chatservice.socket.on("chatUpdate", function(msgval,fromusername,tousername){
                                
                                // console.log("here you get msg:- "+ msgval + "//"+ this.addrow);
                                // this.rightrightnowmsg = "1";
                                // this.rightrightnowmsg = "msgval";
                                 testservice.datacoming   = msgval;
                                 testservice.isdatacoming = true;
                                 testservice.currentusername = tousername;
                                // // this.message= "";
                                // // this.addrow = "1";
                                // // this.currentmessagevalue = msgval;

                                
                        });   
             
            }
            
            ngOnInit() {
                       
                        this.siblingservice.getMessage().subscribe(message => { 

                                if(message!=null){
                                        this.dedicatedname = message.name; 
                                        this.dedicatedusername = message.username;
                                        this.conversation     = message.chatstore;
                                   
                                }
                                else{

                                    console.log("message is null");

                                }       
                             });
                           
                
            }
            
            ngOnChanges() {
                        this.siblingservice.getMessage().subscribe(message => { 
                            this.dedicatedname = message.name; 
                            this.dedicatedusername = message.username; 
                            this.conversation     = message.chatstore;   
                        });
                      
            }
            
            sendmsg(msgvaltoshow){
                          
                        this.chatservice.sendMessage(this.message,this.dedicatedusername,sessionStorage.getItem('username') );
                        this.message = '';
                        var data={

                            "fromusername" : sessionStorage.getItem('username'),
                            "message"      : msgvaltoshow 
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
            }

            keypressHandler(event) {
                        if (event.keyCode === 13){
                        this.sendmsg(this.message);
                    }
 
            } 


           

            ngDoCheck() {
                

                
                if(this.testservice.isdatacoming){
                    console.log("yes inside if");
                     var data={

                            "fromusername" : this.testservice.currentusername,
                            "message"      : this.testservice.datacoming 
                        };

                        this.conversation.push(data);
                       this.testservice.isdatacoming = false; 
                       this.testservice.datacoming = "";     
                }
                else{
                    console.log("inside else");
                }
               
            }
 

}






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