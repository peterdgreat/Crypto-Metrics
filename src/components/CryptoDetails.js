/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
} from 'react-router-dom';
import CryptoList from './CryptoList';
// import CryptoList from './CryptoList';

export default function CryptoDetails() {
  const CryptoData = useSelector((state) => state.cryptoreducer.data);
  // filter based on the selected country
  const cryptoList = [];

  const { pathname } = useLocation();
  const path = pathname.split('/')[2];
  console.log(path);
  Object.entries(CryptoData).map((data) => {
    const [key, value] = data;
    if (value.name === path) {
      cryptoList.push(value);
    }
    return cryptoList;
  });
  console.log(cryptoList);

  return (
    <ul className="container">
      {Object.entries(cryptoList).map((data) => {
        const [key, value] = data;
        return (
          <li key={key}>
            {value.name}
            {value.price}
            {value.symbol}
            {value.rank}
            {value.circulating_supply}
            {value.max_supply}
          </li>
        );
      })}
    </ul>

  );
}
