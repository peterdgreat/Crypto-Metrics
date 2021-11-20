import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { fetchCryptoData } from '../redux/crypto';
import store from '../redux/configurestore';
import Crypto from '../components/Crypto';
import Search from '../components/Search';
import App from '../App';

import cryptoData from '../mock/cryptoData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockResponse = (status, statusText, response) => new window.Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json',
  },
});
it('calls request and success actions if the fetch response was successful', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200,
    null, JSON.stringify(cryptoData))));
  const store = mockStore({});
  return store.dispatch(fetchCryptoData())
    .then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(1);
    });
});

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const header = screen.findByText('Cryptocurrency');
    expect(header).toBeTruthy();
  });
});

describe('Crypto', () => {
  test('renders Crypto component', () => {
    render(
      <Provider store={store}>
        <Crypto />
      </Provider>,
    );
    const header = screen.findByText('Global Stats');
    expect(header).toBeTruthy();
  });
});

describe('Search', () => {
  test('renders Seatch component', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    const search = screen.findByRole('textbox');
    expect(search).toBeTruthy();
  });
});
