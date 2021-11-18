import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CryptoList(props) {
  const {
    name, logo, price, symbol,
  } = props;
  return (
    <NavLink to={`/crypto/${name}`}>

      <li className="list-group-item card-body-m">
        <div className="d-flex flex-column justify-content-end">
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

        </div>

      </li>
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
