/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
  NavLink,
} from 'react-router-dom';
import leftArrow from './left.png';

export default function CryptoDetails() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  const cryptoList = [];

  const { pathname } = useLocation();
  const path = pathname.split('/')[2];
  Object.entries(CryptoData).map((data) => {
    const [key, value] = data;
    if (value.symbol === path) {
      cryptoList.push(value);
    }
    return cryptoList;
  });

  return (
    <div>

      {Object.entries(cryptoList).map((data) => {
        const [key, value] = data;
        return (
          <>
            <section className="container d-flex align-items-center">
              <NavLink id="bg-r" to="/">
                <img src={leftArrow} alt="back" className="img-logo" />
              </NavLink>
              <span>{value.name}</span>
            </section>
            <section key={key} className="align">
              <div className="d-flex  justify-content-between px-5 container align-items-center list-group-item bg">

                <span>Name</span>
                {value.name}
                (
                {value.symbol}
                )

              </div>
              <div className="d-flex  justify-content-between px-5 container align-items-center list-group-item bg">

                <span>Logo</span>
                <img className="img-logo" src={value.logo_url} alt="logo" />

              </div>

              <div className="d-flex  justify-content-between px-5 container align-items-center list-group-item bg">

                <span>Price</span>
                <span>
                  $
                  {value.price}
                </span>

              </div>
              <div className="d-flex  justify-content-between px-5 container align-items-center list-group-item bg">

                <span>Market Cap</span>
                <span>
                  $
                  {value.market_cap}
                </span>
              </div>

            </section>
          </>
        );
      })}

    </div>

  );
}
