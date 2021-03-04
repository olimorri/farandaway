export interface TripOption {
  title: string;
  destination : string;
  startDate: string;
  nights: number;
  budgetRangeMin: number;
  budgetRangeMax: number;
  isChosen: boolean;
}
