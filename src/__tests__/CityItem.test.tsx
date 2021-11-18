import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CityItem from '../components/City/CityItem';
import { CityLite } from '../types/city';

const city: CityLite = {
  id: '3435910',
  name: 'Buenos Aires',
  weather: {
    summary: {
      icon: '01d',
      description: 'cielo claro',
    },
    temperature: {
      actual: 26.3,
    },
  },
};

test('Render CityItem', () => {
  const mockHandler = jest.fn();
  const { getByText } = render(<CityItem city={city} onPress={mockHandler} />);

  getByText(city.name);
});

test('Press CityItem', () => {
  const mockHandler = jest.fn();
  const { getByTestId } = render(<CityItem city={city} onPress={mockHandler} />);

  fireEvent.press(getByTestId(city.id));
  expect(mockHandler).toBeCalled();
  expect(mockHandler).toBeCalledTimes(1);
  expect(mockHandler).toBeCalledWith(city);
});
