import FETCH_DATA from './coronaData.types';

const initialData = [
];

const DataReducer = (state = initialData, action) => {
  const dataList = [...state];

  switch (action.type) {
    case FETCH_DATA: {
      const newData = [...action.payload];
      const filterData = newData.map((data) => ({
        regions: data.name,
      }));
      return [...dataList, ...filterData];
    }
    default:
      return dataList;
  }
};

export default DataReducer;
