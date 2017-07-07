import { Component } from "@angular/core";
import { ConstantValue } from "./shared/value/constant";
import { DashboardWholeComponent } from "./dashboard/dashboard-whole.component";


@Component({

    selector : "my-app",

    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.Component.css"],
   


})

export class AppComponent{


    websitename = ConstantValue.websitename;

    
}