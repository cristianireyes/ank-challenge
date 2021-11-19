import React from 'react';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${({ color }) => (color ? color : Colors.black)};
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  line-height: ${({ size }) => (size ? `${size}px` : '24px')};
  font-weight: bold;
`;

const Unit = ({ value, ...props }) => <Text {...props}>{value}</Text>;

export default Unit;
