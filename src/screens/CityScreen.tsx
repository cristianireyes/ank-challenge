import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CITY } from '../queries/getCityByName';
import Loading from '../components/Loading';
import ScreenView from '../components/ScreenView';
import CityDetail from '../components/City/CityDetail';
import { sanitizeSearch } from '../utils/sanitizeSearch';

export default function CityScreen({ route }) {
  const { name } = route.params;
  const { loading, data } = useQuery(GET_CITY, {
    variables: { name: sanitizeSearch(name) },
  });

  return (
    <ScreenView>{loading ? <Loading /> : <CityDetail city={data.city} />}</ScreenView>
  );
}
