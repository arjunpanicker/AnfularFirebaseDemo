import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { SharedService } from './shared.service';

@Injectable()
export class AuthService {

    constructor(
        private angularFireAuth: AngularFireAuth,
        private sharedService: SharedService
    ) {}

    login(emailid, password): Promise<boolean> {
        return this.angularFireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() =>
                this.angularFireAuth.auth.signInWithEmailAndPassword(emailid, password)
                .then( res => {
                    this.sharedService.isSignedIn = true;
                    console.log(this.angularFireAuth.auth.currentUser);
                    if (!this.angularFireAuth.auth.currentUser.emailVerified) {
                        this.angularFireAuth.auth.currentUser.sendEmailVerification();
                    }
                    return true;
                })
                .catch( function (error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode === 'auth/wrong-password') {
                        alert('Invalid username or password');
                    } else {
                        alert(errorMessage);
                    }

                    return Promise.reject(false);
                })
            );
    }

    checkSignInstatus(): Promise<boolean> {
        return new Promise( function(resolve, reject) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        });
    }

    logout(): Promise<boolean> {
        return this.angularFireAuth.auth.signOut()
            .then(() => true)
            .catch((error) => {
                alert(error.message);
                return Promise.reject(false);
            });
    }

}