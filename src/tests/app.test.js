import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><App /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
