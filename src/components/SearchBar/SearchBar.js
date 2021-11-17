import SearchBarIcon from './search.svg'
import styled from 'styled-components';
import { useContext } from 'react';
import { SearchContext } from '../../searchContext';

const SearchBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 6px 20px;
  background: #ccc;
  text-align: center;
  display:flex;
  height:50px;
  z-index:2;
`
const Img = styled.img`
  width: 26px;
  padding: 0 2px;
  margin-right:10px;
`;
const SearchBarItem = styled.input`
  padding: 6px 12px;
  width: 100%;
  border: 1px solid #b4a582;
  border-radius: 4px;
  outline: none;
  ${(props) => props.value === false && "display: none;"}
`
const SearchBar = () => {
  const { searchItem, setSearchItem } = useContext(SearchContext)

  const handleEnter = () => {
    if (searchItem) {
      setSearchItem("");
    }
  };
  return (
    <SearchBarWrapper>
      <Img src={SearchBarIcon} />
      <SearchBarItem
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleEnter();
          }
        }}
      />
    </SearchBarWrapper>
  )
}

export default SearchBar