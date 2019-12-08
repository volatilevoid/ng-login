import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  email: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('userData') !== null) {
      this.email = JSON.parse(localStorage.getItem('userData')).email;
    }
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }

}
