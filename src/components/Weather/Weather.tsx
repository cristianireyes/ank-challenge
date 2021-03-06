import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Weather } from '../../types/weather';
import Temperature from './Temperature';
import Summary from './Summary';
import Row from '../Row';

const WeatherContent = ({ weather }: { weather: Weather }) => (
  <View>
    <Row>
      <Temperature
        temperature={weather.temperature}
        description={weather.summary.description}
      />
    </Row>
    <Divider style={{ marginVertical: 8 }} />
    <Summary
      clouds={weather.clouds}
      temperature={weather.temperature}
      wind={weather.wind}
    />
  </View>
);
export default WeatherContent;
