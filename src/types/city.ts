import { Weather } from './weather';

export type City = {
  id: string;
  name: string;
  country: string;
  coord: Coordinates;
  weather: Weather;
};

export type CityLite = {
  id: string;
  name: string;
  weather: {
    summary: {
      icon: string;
      description: string;
    };
    temperature: {
      actual: number;
    };
  };
};

type Coordinates = {
  lon: number;
  lat: number;
};
