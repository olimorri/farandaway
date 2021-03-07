import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn: boolean | undefined;

  userId: number | undefined;

  constructor(private userInfo: UserInfoService) {}

  ngOnInit(): void {
    this.userInfo.getUserId();
  }

  getUserInfo() {
    const test = this.userInfo.getUserId();
    console.log(test);
  }
}
