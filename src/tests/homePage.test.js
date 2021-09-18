import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import HomePage from '../components/homePage/homePage';
import store from '../redux/configureStore';

describe('Test Home component', () => {
  const component = render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );

  test('Testing Home component render', () => {
    expect(component.container).toBeInTheDocument();
  });
});
