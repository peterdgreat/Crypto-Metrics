import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from './redux/crypto';
import { getGlobalData } from './redux/global';
import CryptoDetails from './components/CryptoDetails';
import Crypto from './components/Crypto';
import './App.css';
import microphone from './components/assets/microphone.png';
import settings from './components/assets/settings.png';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);
  useEffect(() => {
    dispatch(getGlobalData());
  }, []);
  const date = new Date();
  const year = date.getFullYear();

  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  return (
    <Router>
      <header className="container mt-3">
        <nav className="d-flex">
          <div className="d-flex align-items-center w-100">
            <h1>{year}</h1>
            <h1 className="nav-icon">Cryptocurrency</h1>
          </div>
          <div className="d-flex justify-content-end w-100">
            <img src={microphone} alt="microphone" className="img-logo" />
            <img src={settings} alt="settings" className="img-logo" />
          </div>
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
