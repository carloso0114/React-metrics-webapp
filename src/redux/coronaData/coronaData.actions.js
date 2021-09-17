/* eslint-disable linebreak-style */
import dayjs from 'dayjs';
import axios from 'axios';
import { FETCH_DATA, GET_FILTERED } from './coronaData.types';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');
const covidAPI = `https://api.covid19tracking.narrativa.com/api/${today}`;

export const addData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(covidAPI);
  dispatch(addData(res.data));
};

export const getFiltered = (data) => ({
  type: GET_FILTERED,
  payload: data,
});
