import axios from 'axios';

// const url = 'https://api.covid19api.com/summary/';
const url2 = 'https://corona.lmao.ninja/v2/countries?yesterday&sort';

const GET_COVID_DATA = 'GET_COVID_DATA';

export const getData = (data) => (
  {
    type: GET_COVID_DATA,
    data,
  }
);
const initialState = {
  data: [

  ],
};
export const fetchCovidData = () => async (dispatch) => {
  const response = await axios.get(url2);
  dispatch(getData(response.data));
};

const covidreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default covidreducer;
