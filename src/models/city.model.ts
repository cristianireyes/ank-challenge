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

type Weather = {
  summary: Summary;
  temperature: Temperature;
  wind: Wind;
  clouds: Clouds;
  timestamp: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type Temperature = {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
};

type Clouds = {
  all: number;
  visibility: number;
  humidity: number;
};

type Summary = {
  title: string;
  description: string;
  icon: string;
};
