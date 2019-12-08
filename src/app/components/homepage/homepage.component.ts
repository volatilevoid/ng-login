import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem('userData')).email;
  }

  onSubmit() {

  }

}
