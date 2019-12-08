import { Injectable } from '@angular/core';
import { CheckUserService } from './check-user.service';
import { User } from '../models/user';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private checkCredentials: CheckUserService) { }

  logIn(user: User) {
    let promise = new Promise((resolve, reject) => {
      if (this.checkCredentials.isAllowed(user)) {
        resolve();
      }
      else {
        reject();
      }
    });
    return promise;
  }
  logOut() { }
}
