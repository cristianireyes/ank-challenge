import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@apollo/client';

import CityList from '../components/City/CityList';
import Loading from '../components/Loading';
import ScreenView from '../components/ScreenView';
import { CITIES } from '../utils/constants';
import { GET_CITIES } from '../queries/getCitiesById';
import { CityLite } from '../types/city';

export default function HomeScreen({ navigation }) {
  const [cities, setCities] = useState([]);
  const { loading, data } = useQuery(GET_CITIES, {
    variables: { cities_id: CITIES },
  });
  const handleNavigate = (item: CityLite) => {
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
