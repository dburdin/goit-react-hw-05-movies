import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const TrendingItem = styled.li`
  font-size: 15px;
  padding: 10px 0;
`;

export const TrendingItemLink = styled(Link)`
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
