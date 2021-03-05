export interface TripOption {
  title: string;
  id?: number;
  destination : string;
  startDate: string;
  nights: number;
  budgetRangeMin: number;
  budgetRangeMax: number;
  votes: number,
  isChosen: boolean;
}
