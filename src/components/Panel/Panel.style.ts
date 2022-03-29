import styled from 'styled-components';

export const PanelWrapper = styled.div`
  display: grid;
  width: 80%;
  max-width: 580px;
  height: 125px;
  grid-row-gap: 10px;
  grid-template-columns: 125px 1fr;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'circle loader'
    'circle button';
  @media (max-width: 900px) {
    grid-template-columns: 125px 1fr;
    max-height: 125px;
  }
`;

export const Circle = styled.div`
  height: 125px;
  width: 125px;
  grid-area: circle;
  background-color: rgba(196, 196, 196, 0.3);
  border: 3px solid rgba(196, 196, 196, 0.4);
  border-radius: 50%;
  color: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;
`;

export const LoaderWrapper = styled.div`
  grid-area: loader;
  background-color: rgba(196, 196, 196, 0.3);
  border: 3px solid rgba(196, 196, 196, 0.4);
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
  position: relative;
`;

export const LoaderLine = styled.span`
  display: block;
  position: absolute;
  left: -100%;
  background-color: rgba(196, 196, 196, 0.4);
  width: 100%;
  height: 100%;
`;

export const Btn = styled.button`
  grid-area: button;
  background-color: rgba(196, 196, 196, 0.3);
  border: 3px solid rgba(196, 196, 196, 0.4);
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  letter-spacing: 2px;
  font-size: 1.5rem;
  color: #e2e2e2;
  cursor: pointer;
`;
