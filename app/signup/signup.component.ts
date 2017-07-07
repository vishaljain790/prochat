import { Component, Input } from "@angular/core";
import { TestService } from "../services/test.service";
import { Router } from "@angular/router";
import { LocalStorageService } from 'ng2-webstorage';


import { Userinfo } from '../models/userinfo';
import { GlobalService } from '../services/global.service';

@Component({

    selector : "signup-app",
    templateUrl: "./app/signup/signup.component.html",
    providers: [TestService],
    styleUrls: ['./app/signup/signup.component.css']

})

export class SignUpComponent{


    @Input() nameval     : string;
    @Input() usernameval : string;
    @Input() password    : string;
    
    
    signupres    : boolean = false; 
    formBlank    : boolean = false;
    formBlankmsg : String  = "Some of fields seem blank!!";   


    userinfo;
    TestService  : TestService;
    Router       : Router;
    globalservice  : GlobalService;


    constructor(private testService : TestService, private router: Router,
                private globalservice1 : GlobalService ,
                private storage:LocalStorageService   
                 ){
            this.testService  = testService;
            this.globalservice = globalservice1;
           // this.router       = Router;
     }

    onClickMe() {

        console.log("clicked me!!"+ this.nameval+ this.usernameval + this.password) ;
        var userinfo = {
            name     : this.nameval,
            username : this.usernameval,
            password : this.password 
        }


        if( !this.nameval  || !this.usernameval || !this.password){
                    this.formBlank = true;
                    this.formBlankmsg = "Some of fields seem blank!!";
        }

        if(this.nameval && this.usernameval && this.password){
            
                     this.testService.signUpUser(userinfo)
                         .subscribe(
                                result => {
                                        console.log("from server:-"+result["status"] +"///"+ result["msg"]);
                                        if(result["status"] == true){
                                                     
                                                    //  this.storage.store('name', this.nameval);
                                                    //  this.storage.store('username', this.usernameval);
                                                     sessionStorage.setItem('name', this.nameval);
                                                     sessionStorage.setItem('username', this.usernameval);
                                                     this.router.navigate(['./chat-dashboard']);
                                                     this.testService.shalladdsignupandlogin = false;
                                          } else{
                                                    
                                                    this.formBlankmsg = result["msg"];

                                          }


                                }
                
                         );

       

                        

        }



    }


}

