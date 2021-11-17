import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from './redux/crypto';
import CryptoDetails from './components/CryptoDetails';
import Crypto from './components/Crypto';
import './App.css';

function App() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);
  return (
    <Router>
      <NavLink to="/">
        <button type="button">Back</button>
      </NavLink>
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
      </Routes>
    </Router>
  );
}

export default App;
