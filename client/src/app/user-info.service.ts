import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  private userIdSource = new BehaviorSubject<number>(0);

  currentUserId = this.userIdSource.asObservable();

  user: User | undefined;

  changeCurrentUserId(id: number) {
    this.userIdSource.next(id);
  }

  getUserId() {
    return this.user?.id;
  }

  setUser(user: User) {
    if (user.id) this.changeCurrentUserId(user.id);
    return (this.user = user);
  }
}
