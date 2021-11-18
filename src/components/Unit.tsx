import styled from 'styled-components/native';

const Unit = styled.Text`
  color: ${({ color }) => (color ? color : '#000000')};
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  line-height: ${({ size }) => (size ? `${size}px` : '24px')};
  font-weight: bold;
`;

export default Unit;
