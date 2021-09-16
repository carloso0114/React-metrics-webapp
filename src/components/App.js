import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './homePage/homePage';
import { fetchData } from '../redux/coronaData/coronaData.actions';
import NavBar from './navBar/navBar';
import SearchBar from './searchBar/searchBar';

export default function App() {
  const { dataReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <NavBar />
      <SearchBar />
      <HomePage data={dataReducer} />
    </div>
  );
}
