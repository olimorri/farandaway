import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  user: User | undefined;

  getUserId() {
    return this.user?.id;
  }

  setUser(user: User) {
    return (this.user = user);
  }
}
