import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  border: 1px solid lightsteelblue;
  border-radius: 20px;
  width: 500px;
  font-size: inherit;
  padding: 0 5px;
  outline: none;
`;

export const SearchButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  background-color: lightsteelblue;
  color: grey;

  cursor: pointer;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: linear;

  :hover {
    background-color: #ff7f50;
    color: white;
  }
`;
