import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import '@fontsource/lato';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from './redux/crypto';
import { getGlobalData } from './redux/global';
import CryptoDetails from './components/CryptoDetails';
import Crypto from './components/Crypto';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);
  useEffect(() => {
    dispatch(getGlobalData());
  }, []);

  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  return (
    <Router>
      <header>
        <nav className="d-flex justify-content-center">
          <h1 className="nav-icon">Cryptocurency</h1>
        </nav>

      </header>
      <Routes>
        <Route path="/" element={<Crypto />} />
        { Object.entries(CryptoData).map((data) => {
          const [key, value] = data;
          return (
            <Route
              key={key}
              path={`/crypto/${value.symbol}`}
              element={<CryptoDetails />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
