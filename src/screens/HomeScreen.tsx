import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@apollo/client';

import CityList from '../components/CityList';
import Loading from '../components/Loading';
import { City } from '../models/city.model';
import { CITIES } from '../utils/constants';
import { GET_CITIES } from '../queries/getCitiesById';

const queryVars = {
  variables: {
    cities_id: CITIES,
  },
};

export default function HomeScreen({ navigation }) {
  const { loading, data } = useQuery(GET_CITIES, queryVars);
  const [cities, setCities] = useState([]);
  const handleNavigate = (item: City) => {
    navigation.navigate('City', item);
  };

  useEffect(() => {
    if (!loading && data) {
      setCities(data.cities);
    }
  }, [loading, data]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        {loading ? <Loading /> : <CityList cities={cities} onNavigate={handleNavigate} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'space-around',
  },
});
