import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from './redux/crypto';
import CryptoDetails from './components/CryptoDetails';
import Crypto from './components/Crypto';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  console.log(CryptoData);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCryptoData());
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Crypto />} />
        { Object.entries(CryptoData).map((data) => {
          const [key, value] = data;
          console.log(value.name);
          return (
            <Route
              key={key}
              path={`/crypto/${value.name}`}
              element={<CryptoDetails />}
            />
          );
        })}
        {/* <Route path="crypto/" element={<CryptoDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
