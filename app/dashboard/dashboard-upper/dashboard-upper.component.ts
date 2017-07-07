import { Component } from "@angular/core";
import { TestService } from "../../services/test.service";


@Component({

    selector : "dashboard-upper",
    templateUrl : "./../app/dashboard/dashboard-upper/dashboard-upper.component.html",
    styleUrls : ['./../app/dashboard/dashboard-upper/dashboard-upper.component.css']
})

export class DashboardUpperComponent{


        isaddornot : boolean ;
        constructor(private testservice : TestService){

              //  this.isaddornot = testservice.shalladdsignupandlogin;

        }

}