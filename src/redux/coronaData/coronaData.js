import dayjs from 'dayjs';
import { FETCH_DATA, GET_FILTERED } from './coronaData.types';

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
    case GET_FILTERED: {
      const filteredDataList = dataList.filter((el) => (
        el[1].id.includes('alg')
      ));
      return filteredDataList;
    }
    default:
      return dataList;
  }
};

export default DataReducer;
