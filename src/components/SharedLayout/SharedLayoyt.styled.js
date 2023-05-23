import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export const Nav = styled.nav`
  background-color: lightsteelblue;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: grey;
  font-size: 20px;

  transform: scale(1);

  transition-property: transform, color;
  transition-duration: 250ms;
  transition-timing-function: linear;

  :hover {
    transform: scale(0.97);
    color: #ff7f50;
  }
`;
