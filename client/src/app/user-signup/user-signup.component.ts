import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { User } from '../interfaces/user';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  constructor(
    private apiClientService: ApiClientService,
    private router: Router,
    private userInfo: UserInfoService,
  ) {}

  emailAddress: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  ngOnInit(): void {}

  userSignUp() {
    const newUser: User = {
      emailAddress: this.emailAddress,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };
    this.apiClientService.userSignUp(newUser).subscribe((user) => {
      this.userInfo.setUser(user);
      this.router.navigate(['/trips']);
    });
  }
}
