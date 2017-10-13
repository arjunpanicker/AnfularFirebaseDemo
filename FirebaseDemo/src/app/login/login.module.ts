import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { AuthService, SharedService } from '../_services';

@NgModule({
    imports: [FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService,
        SharedService
    ]
})

export class LoginModule {}