import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from './Search';

import CryptoList from './CryptoList';

function Crypto() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  const globalData = useSelector((state) => state.globalreducer.data);

  const [search, setSearch] = useState('');
  const oninput = (e) => {
    setSearch(e.target.value);
  };

  const filteredCrypto = Object.entries(CryptoData).filter((data) => {
    const [, value] = data;
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className=" d-flex flex-column  justify-content-center container-fluid">
      <header className="d-flex justify-content-center">
        <section>
          <h1 className="GlobalHeader pt-5 text-center">Global Stats</h1>
          {Object.entries(globalData).map((data) => {
            const [key, value] = data;
            return (
              <section key={key} className="d-flex justify-content-center  align-items-start flex-column ">
                <div>
                  <span> Total Coins in Market:</span>
                  <span>{value.coins_count}</span>
                </div>
                <div>
                  <span> Total Active Market:</span>
                  <span>{value.active_markets}</span>
                </div>
                <div>
                  <span> Total Market Cap:</span>
                  <span>
                    $
                    {value.total_mcap}
                  </span>
                </div>
              </section>
            );
          })}
        </section>
      </header>
      <Search search={search} onInput={oninput} />
      <h3 className="text-center t-col">Top 100 Coins</h3>
      <div className="row">
        {filteredCrypto.map((data) => {
          const [key, value] = data;
          return (
            <CryptoList
              key={key}
              name={value.name}
              symbol={value.symbol}
              logo={value.image}
              price={parseInt(value.current_price, 10).toFixed(2)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Crypto;
