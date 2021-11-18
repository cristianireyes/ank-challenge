import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@apollo/client';

import CityList from '../components/City/CityList';
import Loading from '../components/Loading';
import ScreenView from '../components/ScreenView';
import { CITIES } from '../utils/constants';
import { GET_CITIES } from '../queries/getCitiesById';
import { City } from '../types/city';

const queryVars = {
  variables: {
    cities_id: CITIES,
  },
};

export default function HomeScreen({ navigation }) {
  const { loading, data } = useQuery(GET_CITIES, queryVars);
  const [cities, setCities] = useState([]);
  const handleNavigate = (item: City) => {
    navigation.navigate('summary', item);
  };

  useEffect(() => {
    if (!loading && data) {
      setCities(data.cities);
    }
  }, [loading, data]);

  return (
    <ScreenView>
      <StatusBar style="auto" />
      {loading ? <Loading /> : <CityList cities={cities} onNavigate={handleNavigate} />}
    </ScreenView>
  );
}
