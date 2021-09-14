import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './homePage/homePage';
import './App.css';
import { fetchData } from '../redux/coronaData/coronaData.actions';

export default function App() {
  const { dataReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <HomePage data={dataReducer} />
    </div>
  );
}
