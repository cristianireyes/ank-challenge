import React from 'react';
import { Avatar } from 'react-native-paper';

const WeatherIcon = ({ id, size = 40 }: { id: string; size?: number }) => (
  <Avatar.Image
    style={{ backgroundColor: 'transparent' }}
    size={size}
    source={{ uri: `http://openweathermap.org/img/wn/${id}@2x.png` }}
  />
);
export default WeatherIcon;
