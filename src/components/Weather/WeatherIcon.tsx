import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
  },
});

const WeatherIcon = ({ id, size = 40 }: { id: string; size?: number }) => (
  <Avatar.Image
    style={styles.icon}
    size={size}
    source={{ uri: `http://openweathermap.org/img/wn/${id}@2x.png` }}
  />
);
export default WeatherIcon;
