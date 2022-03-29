import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  background-color: rgba(196, 196, 196, 0.3);
  border-radius: 0 0 10px 10px;
  border-left: 3px solid rgba(196, 196, 196, 0.4);
  border-right: 3px solid rgba(196, 196, 196, 0.4);
  border-bottom: 3px solid rgba(196, 196, 196, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
