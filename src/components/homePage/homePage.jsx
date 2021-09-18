import { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import Cards from './cards/cards';

const homePage = (props) => {
  const { data } = props;
  const [searchText, filteredText] = useState('');
  const handleSearch = (e) => {
    filteredText(e.target.value);
  };
  const countriesList = data.filter((el) => el[1].id.includes(searchText))
    .map((el) => (
      <Cards key={el[1].id} data={el} />
    ));
  return (
    <div className="container-fluid">
      <SearchBar value={searchText} handler={handleSearch} />
      <div className="row">
        { countriesList }
      </div>
    </div>
  );
};

export default homePage;
