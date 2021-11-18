import React from 'react';
import { render } from '@testing-library/react-native';
import Unit from '../components/Unit';

test('Render Unit', () => {
  const unit = 'C';
  const { getByText } = render(<Unit value={unit} />);

  getByText(unit);
});
