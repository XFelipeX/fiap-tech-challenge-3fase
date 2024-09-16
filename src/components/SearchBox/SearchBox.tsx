import React from 'react'
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIconDiv,
} from './styles'

import searchIcon from '../../assets/searchIcon.png'

interface SearchBoxProps {
  onSearch: (search: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Pesquisar Post" onChange={handleInputChange} />
      <SearchButton>
        <SearchIconDiv src={searchIcon}></SearchIconDiv>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBox
