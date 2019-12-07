import { Injectable } from '@angular/core';
import { CheckUserService } from './check-user.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private checkCredentials: CheckUserService) { }

  logIn(user: User) { }

  logOut(user: User) { }
}
