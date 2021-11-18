import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Temperature } from '../../types/weather';
import { formatNumber } from '../../utils/formatNumber';
import { toCapitalize } from '../../utils/toCapitalize';
import Column from '../Column';
import Icon from '../Icon';
import Row from '../Row';
import Unit from '../Unit';
import TemperatureValue from './WeatherValue';

const styles = StyleSheet.create({
  actual: {
    fontSize: 54,
    fontWeight: 'bold',
    lineHeight: 54,
  },
  min: {
    marginRight: 8,
  },
  max: {
    marginLeft: 8,
  },
});

const TemperatureContent = ({
  temperature,
  description,
}: {
  temperature: Temperature;
  description: string;
}) => (
  <Column>
    <Row>
      <Text style={styles.actual}>{formatNumber(temperature.actual)}</Text>
      <Unit>°C</Unit>
    </Row>
    <Row>
      <Row style={styles.min}>
        <Icon name="temperature-low" size={16} />
        <TemperatureValue value={temperature.min} />
      </Row>
      <Row style={styles.max}>
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
