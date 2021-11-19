import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { GET_CITY } from '../../queries/getCityByName';
import { City } from '../../types/city';
import { CITY_NOT_FOUND } from '../../utils/errors';

interface SearchProps {
  onResult: (city: City) => void;
  onError: (error: string) => void;
}

const Search = ({ onResult, onError }: SearchProps) => {
  const [cityName, setCityName] = useState('');
  const [getCity, { data, loading, error }] = useLazyQuery(GET_CITY);

  const searchCity = (name: string) => {
    if (name) {
      getCity({ variables: { name } });
      setCityName('');
    }
  };

  useEffect(() => {
    if (!loading && data) {
      if (!data.city) return onError(CITY_NOT_FOUND);
      if (error) return onError(error.message);
      onResult(data.city);
    }
  }, [loading]);

  return (
    <Searchbar
      style={{ marginVertical: 8, marginHorizontal: 16 }}
      placeholder="Buscar ciudad"
      onChangeText={query => setCityName(query)}
      onSubmitEditing={() => searchCity(cityName)}
      value={cityName}
    />
  );
};

export default Search;
