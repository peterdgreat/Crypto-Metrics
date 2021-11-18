import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
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
    <div>
      <input onInput={oninput} value={search} />

      <ul className="container-fluid list-unstyled d-flex flex-wrap justify-content-center">
        {filteredCrypto.map((data) => {
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
    </div>
  );
}

export default Crypto;
