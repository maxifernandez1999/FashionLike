import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './modules/abm/pages/abm/abm.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { RegisterComponent } from './modules/register/pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'abm',
    component: AbmComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
