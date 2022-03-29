import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  flex: 2;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Navigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  font-size: 2rem;
`;

export const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;
