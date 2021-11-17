import axios from 'axios';

const url2 = 'https://api.nomics.com/v1/currencies/ticker?key=10f9f92a64a43f83cb4520cb9ebba94ffcd02883&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&per-page=100&page=1';

const GET_CRYPTO_DATA = 'GET_crypto_DATA';
const GET_CRYPTO_DATA_DETAILS = 'GET_CRYPTO_DATA_DETAILS';

export const getData = (payload) => (
  {
    type: GET_CRYPTO_DATA,
    payload,
  }
);

export const getCrptoDetails = (id) => (
  {
    type: GET_CRYPTO_DATA_DETAILS,
    id,
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
    case GET_CRYPTO_DATA_DETAILS:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.id) {
            return action;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default cryptoreducer;
