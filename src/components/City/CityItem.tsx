import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-paper';
import { CityLite } from '../../types/city';
import { toCapitalize } from '../../utils/toCapitalize';
import WeatherIcon from '../Weather/WeatherIcon';

interface CityItemProps {
  city: CityLite;
  onPress: (city: CityLite) => void;
}

const CityItem = ({ city, onPress }: CityItemProps) => (
  <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
    <Card>
      <TouchableHighlight
        testID={city.id}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onPress(city)}
      >
        <Card.Title
          title={city.name}
          subtitle={toCapitalize(city.weather.summary.description)}
          left={() => <WeatherIcon id={city.weather.summary.icon} />}
        />
      </TouchableHighlight>
    </Card>
  </View>
);
export default CityItem;
