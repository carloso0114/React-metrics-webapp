import dataReducer from '../redux/coronaData/coronaData';

describe('test initial state', () => {
  test('should return the initial state of covid reducer', () => {
    expect(dataReducer(undefined, {})).toEqual([]);
  });
});
