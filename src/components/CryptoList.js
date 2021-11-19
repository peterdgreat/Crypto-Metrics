import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CryptoList(props) {
  const {
    name, logo, price, symbol,
  } = props;
  return (
    <NavLink to={`/crypto/${name}`}>

      <section className="list-group-item card-body-m">
        <li className="d-flex flex-column justify-content-end t">
          <span>
            {symbol}
          </span>

          <span>
            $
            {price}

          </span>
          <span>
            <img src={logo} alt={name} className="img-logo" />
          </span>

        </li>

      </section>
    </NavLink>
  );
}

CryptoList.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
export default CryptoList;
