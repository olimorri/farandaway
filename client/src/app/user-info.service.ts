import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  userId: number | undefined = 0;

  getUserId() {
    return this.userId;
  }

  setUserId(id: number | undefined) {
    console.log(id);
    return (this.userId = id);
  }
}
