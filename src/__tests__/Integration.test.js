import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCryptoData } from '../redux/crypto';
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
