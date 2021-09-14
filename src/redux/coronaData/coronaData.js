import dayjs from 'dayjs';
import FETCH_DATA from './coronaData.types';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

const initialData = [
];

const DataReducer = (state = initialData, action) => {
  const dataList = [...state];

  switch (action.type) {
    case FETCH_DATA: {
      const { ...countries } = action.payload.dates[today].countries;
      dataList.push(countries);
      return dataList;
    }
    default:
      return dataList;
  }
};

export default DataReducer;
