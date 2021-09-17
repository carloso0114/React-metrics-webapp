import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './homePage/homePage';
import Details from './details.jsx/details';
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
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <SearchBar data={dataReducer} />
            <HomePage data={dataReducer} />
          </Route>
          { dataReducer.map((data) => (
            <Route key={data[1].id} path={`/${data[0].toLowerCase()}`}>
              <Details data={data} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}
