import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-burger',
  templateUrl: './header-burger.component.html',
  styleUrls: ['./header-burger.component.css'],
})
export class HeaderBurgerComponent implements OnInit {
  @Input() userId: number | undefined;

  constructor(
    private userInfoService: UserInfoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.userInfoService.changeCurrentUserId(0);
    this.router.navigate(['/']);
  }
}
