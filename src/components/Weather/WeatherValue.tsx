import React from 'react';
import { Text } from 'react-native';
import { Colors } from 'react-native-paper';
import { formatNumber } from '../../utils/formatNumber';
import Row from '../Row';
import Unit from '../Unit';

interface WeatherValueProps {
  color?: string;
  unit?: string;
  value: number;
}

const WeatherValue = ({
  color = Colors.black,
  unit = null,
  value,
}: WeatherValueProps) => (
  <Row alignItems="center">
    <Text style={{ color: color, fontWeight: '700', fontSize: 16, lineHeight: 16 }}>
      {formatNumber(value)}
    </Text>
    {unit && <Unit value={unit} color={color} size={10} />}
  </Row>
);
export default WeatherValue;
