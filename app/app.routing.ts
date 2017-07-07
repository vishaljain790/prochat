import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './login/login.component';
import { SignUpComponent }      from './signup/signup.component';
import { ChatDashBoardComponent } from './chatdashboard/chat-dashboard.component';
import { DashboardAssemble } from './dashboard/dashboard-assemble/dashboard-assemble.component';
 
const routes: Routes = [
  
  
  { path: 'signup',  component: SignUpComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'chat-dashboard', component: ChatDashBoardComponent },
  { path: '', component: DashboardAssemble}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}