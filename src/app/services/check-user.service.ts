import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { ALLOWEDUSERS } from '../mock-allowed-users';


@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  constructor() { }

  isAllowed(user: User): boolean {
    var isIn: boolean = false;

    for(let i: number = 0, l = ALLOWEDUSERS.length; i < l; i++ ) {
      if(ALLOWEDUSERS[i].email === user.email && ALLOWEDUSERS[i].password === user.password) {
        isIn = true;
      }
    }

    return isIn;
  }
}
