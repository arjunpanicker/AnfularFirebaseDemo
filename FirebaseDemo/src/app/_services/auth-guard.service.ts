import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { SharedService } from './shared.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth,
        private authService: AuthService,
        private sharedService: SharedService
    ) {}

    canActivate(): Promise<boolean> {
        return this.authService.checkSignInstatus()
            .then(res => {
                this.sharedService.isSignedIn = true;
                return true;
            })
            .catch(res => {
                this.router.navigate(['/login']);
                return false;
            });
    }

}