import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private apiClientService: ApiClientService,
    private router: Router,
    private userInfo: UserInfoService,
  ) {}

  emailAddress: string = '';

  password: string = '';

  ngOnInit(): void {}

  userLogin() {
    this.apiClientService
      .userLogin(this.emailAddress, this.password)
      .subscribe((user) => {
        if (user) {
          this.userInfo.setUser(user[0]);
          this.router.navigate([`/users/${user[0].id}`]);
          if (user[0].id) this.userInfo.changeCurrentUserId(user[0].id);
        }
      });
  }
}
