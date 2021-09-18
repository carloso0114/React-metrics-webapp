import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/details.jsx/details';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const fakeData = ['Antigua and Barbuda',
    {
      date: '2021-09-16',
      id: 'antigua_and_barbuda',
      links: [
        {
          href: '/api/2021-09-16/country/antigua_and_barbuda',
          rel: 'self',
          type: 'GET',
        },
      ],
      name: 'Antigua and Barbuda',
      name_es: 'Antigua y Barbuda',
      name_it: 'Antigua e Barbuda',
      regions: [],
      source: 'John Hopkins University',
      today_confirmed: 2304,
      today_deaths: 48,
      today_new_confirmed: 0,
      today_new_deaths: 0,
      today_new_open_cases: 0,
      today_new_recovered: 0,
      today_open_cases: 1017,
      today_recovered: 1239,
      today_vs_yesterday_confirmed: 0,
      today_vs_yesterday_deaths: 0,
      today_vs_yesterday_open_cases: 0,
      today_vs_yesterday_recovered: 0,
      yesterday_confirmed: 2304,
      yesterday_deaths: 48,
      yesterday_open_cases: 1017,
      yesterday_recovered: 1239,
    },
  ];
  const tree = renderer
    .create(<Router><Provider store={store}><Details data={fakeData} /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
