import React from 'react';
import { Card, Divider } from 'react-native-paper';
import { City } from '../../types/city';
import ButtonMap from '../ButtonMap';
import Weather from '../Weather/Weather';

const CityDetail = ({ city }: { city: City }) => (
  <Card style={{ margin: 16, padding: 16, borderRadius: 30 }}>
    <Card.Title title={city.name} />
    <Card.Content>
      <Weather weather={city.weather} />
      <Divider />
    </Card.Content>
    <Card.Actions style={{ alignSelf: 'flex-end', marginTop: 10 }}>
      <ButtonMap coordinates={city.coord} />
    </Card.Actions>
  </Card>
);
export default CityDetail;
