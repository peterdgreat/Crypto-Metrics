import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CryptoList from './CryptoList';

function Crypto() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);

  const [search, setSearch] = useState('');
  oninput = (e) => {
    // update the state
    setSearch(e.target.value);
  };

  const filteredCrypto = Object.entries(CryptoData).filter((data) => {
    const [, value] = data;
    // if not found, return false
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className=" d-flex flex-column  justify-content-center container-fluid bg">
      <header className="d-flex justify-content-center">
        <h3>Top 100 Coins</h3>
      </header>
      <div className="input-group input-group-sm mb-3 container">

        <input className="form-control" onInput={oninput} value={search} placeholder="search..." />
      </div>
      <div className="row">
        {filteredCrypto.map((data) => {
          const [key, value] = data;
          return (
            <CryptoList
              key={key}
              name={value.name}
              symbol={value.symbol}
              logo={value.logo_url}
              price={parseInt(value.price, 10).toFixed(2)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Crypto;
