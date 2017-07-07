import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
import { TestService } from "./test.service";

@Injectable()
export class SiblingService {
    private subject          = new Subject<any>();
    private subject_userlist = new Subject<any>(); 


    constructor(private testservice: TestService){

    }

    sendMessage(message: string,msg: string, chatstorer : any) {
        this.subject.next({ name: message,
                            username : msg,
                            chatstore : chatstorer    
                         });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }


    setuserlist(){

        this.subject_userlist.next(this.testservice.getUserDetails());
        console.log("list of friedns:-"+this.testservice.getUserDetails()[0]);
    }


    getuserlist(): Observable<any>{

          return this.subject_userlist.asObservable();
    
    }


}