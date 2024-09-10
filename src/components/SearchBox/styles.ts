import styled from 'styled-components'
import theme from '../../styles/theme'

const colorType = {
  cardBackgroundColor: theme.colors.cardBackgroundColor,
  standardFont: theme.colors.standardFont,
}

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorType.cardBackgroundColor};
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background-color: ${colorType.cardBackgroundColor};
  color: ${colorType.standardFont};

  &:focus {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const SearchButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: ${colorType.cardBackgroundColor};
  color: ${colorType.standardFont};
  font-size: 1rem;
  cursor: pointer;
`;

export const SearchIconDiv = styled.img`
  height: 20px;
`;