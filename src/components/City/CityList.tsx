import React from 'react';
import { FlatList } from 'react-native';
import { CityLite } from '../../types/city';
import CityItem from './CityItem';

interface CitiesProps {
  cities: CityLite[];
  onNavigate: (city: CityLite) => void;
}

const CityList = ({ cities, onNavigate }: CitiesProps) => (
  <FlatList
    data={cities}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => <CityItem city={item} onPress={onNavigate} />}
  />
);
export default CityList;
