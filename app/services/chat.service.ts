import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from "socket.io-client";
import { LocalStorageService }  from 'ng2-webstorage';


import {  GlobalService } from "./global.service";



export class ChatService {
  // Our localhost address that we set in our server code
  private url = 'http://localhost:3100'; 
   socket;

  username : string;
  name     : string;  

  private localstorgae: LocalStorageService;
    

   constructor(){

       
   } 

   setConnection(){

       this.socket = io(this.url);
   } 

    submitUserName(username, name){
        
            var data={

                "username": username,
                "name"    : name
             }
            this.socket.emit("usernamesubmit", data, function(result){

                console.log("return msg"+ result);
            });
       
     }

   sendMessage(message, to,from){
                  // Make sure the "add-message" is written here because this is referenced in on() in our server
    this.socket.emit('msg', message,to,from);   
    }

    getMessages() {
            let observable = new Observable(observer => {
            //   this.socket = io(this.url);
              this.socket.on('message', (data) => {
                observer.next(data);    
              });
              return () => {
                // this.socket.disconnect();
              };  
            })     
            return observable;
  }

  
}