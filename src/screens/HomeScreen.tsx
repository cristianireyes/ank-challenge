import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@apollo/client';

import CityList from '../components/City/CityList';
import Loading from '../components/Loading';
import ScreenView from '../components/ScreenView';
import SearchCity from '../components/Search/Search';
import SearchError from '../components/Search/SearchError';
import { GET_CITIES } from '../queries/getCitiesById';
import { CITIES } from '../utils/constants';
import { City, CityLite } from '../types/city';

export default function HomeScreen({ navigation }) {
  const [cities, setCities] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const { loading, data } = useQuery(GET_CITIES, {
    variables: { cities_id: CITIES },
  });
  const handleNavigate = (item: CityLite) => {
    navigation.navigate('summary', item);
  };
  const handleSearch = (city: City) => {
    setSearchError(null);
    setCities([city, ...cities]);
  };

  useEffect(() => {
    if (!loading && data) {
      setCities(data.cities);
    }
  }, [loading, data]);

  return (
    <ScreenView>
      <StatusBar style="auto" />
      <SearchCity onResult={handleSearch} onError={error => setSearchError(error)} />
      <SearchError error={searchError} onDismiss={() => setSearchError(null)} />
      {loading ? <Loading /> : <CityList cities={cities} onNavigate={handleNavigate} />}
    </ScreenView>
  );
}
