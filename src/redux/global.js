import axios from 'axios';

const globalUrl = 'https://api.coinlore.net/api/global/';

const GET_GLOBAL_DATA = 'GET_GLOBAL_DATA';
const initialState = {
  data: [

  ],
};
export const getGlobal = (payload) => (
  {
    type: GET_GLOBAL_DATA,
    payload,
  }
);
export const getGlobalData = () => async (dispatch) => {
  const response = await axios.get(globalUrl);
  dispatch(getGlobal(response.data));
};

const globalreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default globalreducer;
