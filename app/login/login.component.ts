import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { TestService } from "../services/test.service";

@Component({

    selector : "login-app",
    templateUrl: "./app/login/login.component.html",
    styleUrls: ['./app/login/login.component.css'],
    providers:[TestService]

})

export class LoginComponent{

    
    @Input() usernamevaltologin : string;
    @Input() passvaltologin     : string;


    formBlank    : boolean = false;
    formBlankmsg : String  = "Some of fields seem blank!!";   

    constructor(private testservice: TestService,
                private router: Router
                ){


    }


    onClickMeForLogin(){

        
        var userinfo = {
           
            username : this.usernamevaltologin,
            password : this.passvaltologin 
        }

        

        if( !this.usernamevaltologin  || !this.passvaltologin ){
                    this.formBlank = true;
                    this.formBlankmsg = "Some of fields seem blank!!";
        }

        if(this.usernamevaltologin && this.passvaltologin ){
            
                     this.testservice.loginUser(userinfo)
                         .subscribe(
                                result => {
                                       
                                        if(result["status"] == true){
                                                     
                                                     sessionStorage.setItem('username' , this.usernamevaltologin);
                                                     sessionStorage.setItem('name', result.msg.name);
                                                     this.router.navigate(['./chat-dashboard']);
                                                     this.testservice.shalladdsignupandlogin = false;
                                          } else{
                                                    
                                                    this.formBlankmsg = result["msg"];

                                          }


                                }
                
                         );

       

                        

        }


    }


}