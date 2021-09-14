/* eslint-disable linebreak-style */
import axios from 'axios';
import FETCH_DATA from './coronaData.types';

export const addData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const fetchData = () => async (dispatch) => {
  const res = await axios.get('https://api.covid19tracking.narrativa.com/api/2020-03-22/country/spain');
  dispatch(addData(res.data));
};
