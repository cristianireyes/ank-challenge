import styled from 'styled-components/native';

const Column = styled.View`
  align-items: ${props => props.alignItems || 'center'};
`;
export default Column;
