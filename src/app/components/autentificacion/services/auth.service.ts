import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import auth from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        //JSON.parse(localStorage.getItem('user') );
      } else {
        localStorage.setItem('user', '');
        //JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: any, password: any) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      console.log(result);
      this.ngZone.run(() => {
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      });
      this.SetUserData(result.user);
      
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async SignUp(email: any, password: any) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      // this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: any) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user =
      localStorage.getItem('user').toString().length === 0 ||
      localStorage.getItem('user') === null
        ? null
        : JSON.parse(localStorage.getItem('user')!);
    return user !== null /* && user.emailVerified !== false */ ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.EmailAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['indice']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }
}
