import styled from 'styled-components';

export const UpgradePanelWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  margin: 10px;
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  & > * {
    margin: 10px;
  }
  h2 {
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 2px;
  }
  span {
    display: flex;
    justify-content: space-between;
    p {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
