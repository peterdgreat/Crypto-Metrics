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
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className=" d-flex flex-column  justify-content-center bg">
      <div className="input-group input-group-sm mb-3">

        <input className="form-control" onInput={oninput} value={search} />
      </div>
      <ul className="d-flex card-m flex-row flex-wrap justify-content-center">
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
      </ul>
    </div>
  );
}

export default Crypto;
