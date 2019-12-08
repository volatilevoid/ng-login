import { Injectable } from '@angular/core';
import { CheckUserService } from './check-user.service';
import { User } from '../models/user';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  constructor(private checkCredentials: CheckUserService) { }
  logIn(user: User) {
    let promise = new Promise((resolve, reject) => {
      // this.checkCredentials.isAllowed(user) === true ? resolve() : reject();
      if (this.checkCredentials.isAllowed(user)) {
        this.isLoggedIn = true;
        resolve();
        localStorage.setItem("userData", JSON.stringify(user));
      }
      else {
        this.isLoggedIn = false;
        reject();
      }
    });
    return promise;
  }
  logOut() { 
    if(localStorage.getItem("userData") !== null) {
      localStorage.removeItem("userData");
    }
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }
}
