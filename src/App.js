import BannerCarousel from './components/BannerCarousel/BannerCarousel'
import SearchBar from './components/SearchBar/SearchBar';
import Counter from './components/Counter/Counter'
import Products from './components/Products/Products';
import { SearchContext } from './searchContext';
import { useState } from 'react';
function App() {
  const [searchItem, setSearchItem] = useState('')
  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      <SearchBar />
      <BannerCarousel />
      <Counter seconds="20" minutes="20" />
      <Products />
    </SearchContext.Provider>
  );
}

export default App;
