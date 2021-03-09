import { Invitee } from './invitee';
import { TripOption } from './trip-option';

export interface Trip {
  title: string;
  id?: number;
  options: TripOption[];
  invitees?: Invitee[];
}
