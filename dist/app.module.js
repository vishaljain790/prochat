"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_webstorage_1 = require("ng2-webstorage");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var signup_component_1 = require("./signup/signup.component");
var app_routing_1 = require("./app.routing");
var chat_dashboard_component_1 = require("./chatdashboard/chat-dashboard.component");
var chat_board_component_1 = require("./chatdashboard/chatboard/chat-board.component");
var chat_user_list_component_1 = require("./chatdashboard/chatuserlist/chat-user-list.component");
var dashboard_upper_component_1 = require("./dashboard/dashboard-upper/dashboard-upper.component");
var dashboard_mid_component_1 = require("./dashboard/dashboard-mid/dashboard-mid.component");
var dashboard_first_down_mid_component_1 = require("./dashboard/dashboard-first-down-mid/dashboard-first-down-mid.component");
var dashboard_footer_component_1 = require("./dashboard/dashboard-footer/dashboard-footer.component");
var dashboard_assemble_component_1 = require("./dashboard/dashboard-assemble/dashboard-assemble.component");
var dashboard_whole_component_1 = require("./dashboard/dashboard-whole.component");
var dashboard_upper_down_component_1 = require("./dashboard/dashboard-upper-down/dashboard-upper-down.component");
var global_service_1 = require("./services/global.service");
var sibling_service_1 = require("./services/sibling.service");
var test_service_1 = require("./services/test.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule,
            http_1.HttpModule,
            ng2_webstorage_1.Ng2Webstorage
        ],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignUpComponent,
            chat_dashboard_component_1.ChatDashBoardComponent,
            chat_board_component_1.ChatBoardComponent,
            chat_user_list_component_1.ChatUserListComponent,
            dashboard_upper_component_1.DashboardUpperComponent,
            dashboard_whole_component_1.DashboardWholeComponent,
            dashboard_mid_component_1.DashboardMidComponent,
            dashboard_first_down_mid_component_1.DashboardFirstDownMidComponent,
            dashboard_footer_component_1.DashboardFooter,
            dashboard_assemble_component_1.DashboardAssemble,
            dashboard_upper_down_component_1.DashboardUpperDownComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [global_service_1.GlobalService,
            test_service_1.TestService,
            sibling_service_1.SiblingService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map