import dayjs from 'dayjs';
import FETCH_DATA from './coronaData.types';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

const initialData = [];

const DataReducer = (state = initialData, action) => {
  const dataList = [...state];

  switch (action.type) {
    case FETCH_DATA: {
      Object.entries(action.payload.dates[today].countries).forEach((e) => {
        dataList.push(e);
      });
      return dataList;
    }
    default:
      return dataList;
  }
};

export default DataReducer;
