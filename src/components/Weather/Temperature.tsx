import React from 'react';
import { Text } from 'react-native';
import { Temperature } from '../../types/weather';
import { formatNumber } from '../../utils/formatNumber';
import { toCapitalize } from '../../utils/toCapitalize';
import TemperatureValue from './WeatherValue';
import Column from '../Column';
import Icon from '../Icon';
import Row from '../Row';
import Unit from '../Unit';

interface TemperatureProps {
  temperature: Temperature;
  description: string;
}

const TemperatureContent = ({ temperature, description }: TemperatureProps) => (
  <Column>
    <Row>
      <Text style={{ fontSize: 54, fontWeight: 'bold', lineHeight: 54 }}>
        {formatNumber(temperature.actual)}
      </Text>
      <Unit value="°C" />
    </Row>
    <Row>
      <Row style={{ marginRight: 8 }}>
        <Icon name="temperature-low" size={16} />
        <TemperatureValue value={temperature.min} />
      </Row>
      <Row style={{ marginLeft: 8 }}>
        <Icon name="temperature-high" size={16} />
        <TemperatureValue value={temperature.max} />
      </Row>
    </Row>
    <Row>
      <Text>{toCapitalize(description)}</Text>
    </Row>
  </Column>
);
export default TemperatureContent;
