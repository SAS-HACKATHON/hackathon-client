import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }       from '@angular/http';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthGuard } from './services/auth_guard.service';

// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserInfoService } from '../app/services/user-info.service';
import { TranslateService } from '../app/services/api/translate.service';
import { ApiRequestService } from '../app/services/api/api-request.service';
import { LoginService } from '../app/services/api/login.service';
import { OrderService } from '../app/services/api/order.service';
import { ProductService } from '../app/services/api/product.service';
import { CustomerService } from '../app/services/api/customer.service';
import { EmployeeService } from '../app/services/api/employee.service';
import { AppConfig } from '../app/app-config';
import {  TruncatePipe }   from './TruncatePipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TruncatePipe,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  
    providers:[
      AuthGuard,
      UserInfoService,
      TranslateService,
      ApiRequestService,
      LoginService,
      OrderService,
      ProductService,
      CustomerService,
      EmployeeService,
      AppConfig,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
