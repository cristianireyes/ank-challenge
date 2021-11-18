import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-paper';
import WeatherIcon from '../Weather/WeatherIcon';

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

const temperatureToString = (temperature: number) => `Temp: ${temperature}`;

const CityItem = ({ city, onPress }) => (
  <View style={styles.item}>
    <Card>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onPress(city)}
      >
        <Card.Title
          title={city.name}
          subtitle={temperatureToString(city.weather.temperature.actual)}
          left={() => <WeatherIcon id={city.weather.summary.icon} />}
        />
      </TouchableHighlight>
    </Card>
  </View>
);
export default CityItem;
