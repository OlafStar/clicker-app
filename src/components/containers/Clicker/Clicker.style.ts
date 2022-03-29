import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { IPropsDim } from './Clicker';

export const ClickerWrapper = styled.main<IPropsDim>`
  flex: 8;
  padding: 20px;
  display: grid;
  grid-template-columns: ${({ dimensions }) => {
    if (dimensions.height > 750 && dimensions.width > 800) return '1fr 1fr';
    return '1fr';
  }};
  grid-template-rows: ${({ dimensions }) => {
    if (dimensions.height > 750 && dimensions.width > 800) return '1fr 1fr 1fr';
    return '250px 250px 250px 250px 250px 250px';
  }};
  justify-items: center;
  align-items: center;
`;
