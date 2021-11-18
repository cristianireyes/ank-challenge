import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: ${props => props.alignItems || 'stretch'};
  margin: 4px 0;
`;
export default Row;
