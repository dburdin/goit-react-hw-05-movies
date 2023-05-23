import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
`;

export const LinkItem = styled(Link)`
  display: flex;
  text-decoration: none;
  color: grey;
  font-size: 20px;

  transform: scale(1);

  transition-property: transform, color;
  transition-duration: 250ms;
  transition-timing-function: linear;

  :hover {
    color: #ff7f50;
    transform: scale(0.97);
  }
`;
