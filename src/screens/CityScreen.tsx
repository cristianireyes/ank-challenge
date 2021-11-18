import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CITY } from '../queries/getCityByName';
import Loading from '../components/Loading';
import ScreenView from '../components/ScreenView';
import CityDetail from '../components/City/CityDetail';

export default function CityScreen({ route }) {
  const { loading, data } = useQuery(GET_CITY, {
    variables: { name: route.params.name },
  });

  return (
    <ScreenView>{loading ? <Loading /> : <CityDetail city={data.city} />}</ScreenView>
  );
}
