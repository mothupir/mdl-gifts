import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
