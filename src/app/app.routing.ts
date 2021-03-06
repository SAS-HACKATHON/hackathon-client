import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import { AuthGuard } from 'app/services/auth_guard.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    canActivate:[AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },{
        path: 'sofnews',
        loadChildren: './views/sofnews/sofnews.module#SofnewsModule'
      },{
        path: 'softech',
        loadChildren: './views/softech/softech.module#SoftechModule'
      },{
        path: 'sofhello',
        loadChildren: './views/sofhello/sofhello.module#SofhelloModule'
      },{
        path: 'sofevents',
        loadChildren: './views/sofevents/sofevents.module#SofeventsModule'
      },{
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
})
export class AppRoutingModule {}
