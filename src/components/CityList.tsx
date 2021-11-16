import React from 'react';
import { FlatList } from 'react-native';
import { City } from '../models/city.model';
import CityItem from './CityItem';

interface CitiesProps {
  cities: City[];
  onNavigate: (city: City) => void;
}

const CityList = ({ cities, onNavigate }: CitiesProps) => (
  <FlatList
    data={cities}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => <CityItem city={item} onPress={onNavigate} />}
  />
);
export default CityList;
