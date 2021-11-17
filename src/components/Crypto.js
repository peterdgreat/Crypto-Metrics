import React from 'react';
import { useSelector } from 'react-redux';
import CryptoList from './CryptoList';

function Crypto() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);

  return (
    <ul className="container">
      {Object.entries(CryptoData).map((data) => {
        const [key, value] = data;
        return (
          <CryptoList
            key={key}
            name={value.name}
            logo={value.logo_url}
            price={value.price}
          />
        );
      })}
    </ul>
  );
}

export default Crypto;
