import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CryptoList(props) {
  const {
    name, logo, price, symbol,
  } = props;
  return (
    <NavLink className="list-group-item card col-5 d-flex justify-content-end" to={`/crypto/${symbol}`}>

      <section className="d-flex  justify-content-between">

        <span>
          <img src={logo} alt={name} className="img-logo" />
        </span>

        <div>
          <div className="d-flex flex-column">
            <span>
              {name}

            </span>
            <span>
              (
              {symbol}
              )
            </span>
          </div>
          <span>
            $
            {price}

          </span>

        </div>

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
