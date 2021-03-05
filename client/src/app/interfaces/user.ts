import { Trip } from './trip';

export interface User {
  id?: number,
  emailAddress: string,
  firstName: string,
  lastName: string,
  password: string,
  createdAt?: string,
  updatedAt?: string,
  trips?: Trip[]
}
