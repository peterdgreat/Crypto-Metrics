/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
  NavLink,
} from 'react-router-dom';
// import CryptoList from './CryptoList';
// // import CryptoList from './CryptoList';

export default function CryptoDetails() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  // filter based on the selected country
  const cryptoList = [];

  const { pathname } = useLocation();
  const path = pathname.split('/')[2];
  console.log(path);
  Object.entries(CryptoData).map((data) => {
    const [key, value] = data;
    if (value.symbol === path) {
      cryptoList.push(value);
    }
    return cryptoList;
  });
  console.log(cryptoList);

  return (
    <div>
      <NavLink to="/">
        <button type="button">Back</button>
      </NavLink>

      {Object.entries(cryptoList).map((data) => {
        const [key, value] = data;
        return (
          <section key={key} className="align">
            <div className="d-flex  justify-content-around container align-items-center list-group-item bg">

              <span>Name</span>
              {value.name}
              (
              {value.symbol}
              )

            </div>
            <div className="d-flex  justify-content-around container align-items-center list-group-item bg">

              <span>Logo</span>
              <img className="img-logo" src={value.logo_url} alt="logo" />

            </div>

            <div className="d-flex  justify-content-around container align-items-center list-group-item bg">

              <span>Price</span>
              <span>
                $
                {value.price}
              </span>

            </div>
            <div className="d-flex  justify-content-around container align-items-center list-group-item bg">

              <span>Market Cap</span>
              <span>
                $
                {' '}
                {value.market_cap}
              </span>
            </div>

          </section>
        );
      })}

    </div>

  );
}
