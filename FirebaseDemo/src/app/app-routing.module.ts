import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { NotFoundComponent } from './not-found';
import { DashboardComponent } from './dashboard';

import { AuthGuardService } from './_services';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}