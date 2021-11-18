import { Weather } from './weather';

export type City = {
  id: number;
  name: string;
  country: string;
  coord: Coordinates;
  weather: Weather;
};

type Coordinates = {
  lon: number;
  lat: number;
};
