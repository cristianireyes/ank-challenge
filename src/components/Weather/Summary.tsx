import React from 'react';
import { List } from 'react-native-paper';
import { Clouds, Temperature, Wind } from '../../types/weather';
import WeatherValue from './WeatherValue';

interface SummaryProps {
  clouds: Clouds;
  temperature: Temperature;
  wind: Wind;
}

const Summary = ({ clouds, temperature, wind }: SummaryProps) => (
  <>
    <List.Item
      title="Viento"
      left={props => <List.Icon {...props} icon="wind" />}
      right={({ color }) => <WeatherValue color={color} value={wind.speed} unit="km/h" />}
    />
    <List.Item
      title="Humedad"
      left={props => <List.Icon {...props} icon="tint" />}
      right={({ color }) => (
        <WeatherValue color={color} value={clouds.humidity} unit="%" />
      )}
    />
    <List.Item
      title="Visibilidad"
      left={props => <List.Icon {...props} icon="smog" />}
      right={({ color }) => (
        <WeatherValue color={color} value={clouds.visibility} unit="m" />
      )}
    />
    <List.Item
      title="Mínima"
      left={props => <List.Icon {...props} icon="temperature-low" />}
      right={({ color }) => (
        <WeatherValue color={color} value={temperature.min} unit="°C" />
      )}
    />
    <List.Item
      title="Máxima"
      left={props => <List.Icon {...props} icon="temperature-high" />}
      right={({ color }) => (
        <WeatherValue color={color} value={temperature.max} unit="°C" />
      )}
    />
  </>
);
export default Summary;
