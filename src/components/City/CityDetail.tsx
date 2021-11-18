import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { City } from '../../types/city';
import Weather from '../Weather/Weather';

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 30,
  },
  text: {
    backgroundColor: '#333',
  },
});

const CityDetail = ({ city }: { city: City }) => (
  <Card style={styles.card}>
    <Card.Title title={city.name} />
    <Card.Content>
      <Weather weather={city.weather} />
    </Card.Content>
  </Card>
);
export default CityDetail;
