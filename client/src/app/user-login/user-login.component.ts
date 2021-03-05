import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Router } from '@angular/router';
import { UserLogin } from '../interfaces/user-login';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private apiClientService: ApiClientService, private router: Router) { }

  emailAddress : string = '';
  password :string = '';

  ngOnInit(): void {
  }

  userLogin() {
    this.apiClientService.userLogin(this.emailAddress, this.password)
    .subscribe(user => {
      if (user) this.router.navigate([`/users/${user[0].id}`]);
    })

  }

}
