import React from 'react'
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIconDiv,
} from './styles'

import searchIcon from '../../assets/searchIcon.png'

const SearchBox: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Pesquisar Post" />
      <SearchButton>
        <SearchIconDiv src={searchIcon}></SearchIconDiv>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBox
