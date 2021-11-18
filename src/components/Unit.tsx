import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${({ color }) => (color ? color : '#000000')};
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  line-height: ${({ size }) => (size ? `${size}px` : '24px')};
  font-weight: bold;
`;

const Unit = ({ value, ...props }) => <Text {...props}>{value}</Text>;

export default Unit;
