import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CITY } from '../queries/getCityByName';
import Loading from '../components/Loading';

export default function CityScreen({ route }) {
  const { loading, data } = useQuery(GET_CITY, {
    variables: { name: route.params.name },
  });

  return (
    <View style={style.container}>
      {loading ? <Loading /> : <Text>{data.city.name}</Text>}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
