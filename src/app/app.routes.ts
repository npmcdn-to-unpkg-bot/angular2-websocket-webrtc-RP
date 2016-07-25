import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './hero/dashboard.Component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { EchoChatComponent } from './echo-chat/echo-chat.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/wiki-smart',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
      path: 'wiki',
      component: WikiComponent 
  },
  {
      path: 'wiki-smart',
      component: WikiSmartComponent
  },
  {
      path: 'echo-chat',
      component: EchoChatComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
