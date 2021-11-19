import React from 'react';
import { Button } from 'react-native-paper';
import { showLocation } from 'react-native-map-link';
import { Coordinates } from '../types/city';

const ButtonMap = ({ coordinates: { lat, lon } }: { coordinates: Coordinates }) => (
  <Button icon="map" onPress={() => showLocation({ latitude: lat, longitude: lon })}>
    Abrir mapa
  </Button>
);
export default ButtonMap;
