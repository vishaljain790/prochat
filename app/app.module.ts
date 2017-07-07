
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing'; 
import { ChatDashBoardComponent } from './chatdashboard/chat-dashboard.component';
import { ChatBoardComponent } from './chatdashboard/chatboard/chat-board.component';
import { ChatUserListComponent } from './chatdashboard/chatuserlist/chat-user-list.component';
import { DashboardUpperComponent } from './dashboard/dashboard-upper/dashboard-upper.component'; 
import { DashboardMidComponent } from './dashboard/dashboard-mid/dashboard-mid.component';
import { DashboardFirstDownMidComponent } from './dashboard/dashboard-first-down-mid/dashboard-first-down-mid.component';
import { DashboardFooter } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardAssemble } from './dashboard/dashboard-assemble/dashboard-assemble.component';
import { DashboardWholeComponent } from './dashboard/dashboard-whole.component';
import { DashboardUpperDownComponent } from './dashboard/dashboard-upper-down/dashboard-upper-down.component';


import {  GlobalService } from './services/global.service';
import {  SiblingService } from './services/sibling.service';
import {  TestService } from './services/test.service';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             AppRoutingModule,
             HttpModule,
             Ng2Webstorage
            
   ],
  declarations: [ AppComponent,
                  LoginComponent,
                  SignUpComponent,
                  ChatDashBoardComponent,
                  ChatBoardComponent,
                  ChatUserListComponent,
                  DashboardUpperComponent,
                  DashboardWholeComponent,
                  DashboardMidComponent,
                  DashboardFirstDownMidComponent,
                  DashboardFooter,
                  DashboardAssemble,
                  DashboardUpperDownComponent
                ],
  bootstrap: [ AppComponent ],
  providers: [GlobalService,
              TestService,
              SiblingService
              ]
  
})    
export class AppModule {}