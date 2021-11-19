import axios from 'axios';

const url2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const GET_CRYPTO_DATA = 'GET_crypto_DATA';

export const getData = (payload) => (
  {
    type: GET_CRYPTO_DATA,
    payload,
  }
);

const initialState = {
  data: [

  ],
};
export const fetchCryptoData = () => async (dispatch) => {
  const response = await axios.get(url2);
  dispatch(getData(response.data));
};

const cryptoreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoreducer;
