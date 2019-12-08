import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authenticator: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user: User = {
      email: this.userLogin.value.email,
      password: this.userLogin.value.password
    }
    this.authenticator.logIn(user).then(response => {
      // redirect if ok, odjeb if not
      console.log('logged in');
    }).catch(response => {
      console.log('rejected');
    });

  }

}
