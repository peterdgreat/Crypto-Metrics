import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CryptoList(props) {
  const { name, logo, price } = props;
  return (
    <NavLink to={`/crypto/${name}`}>

      <li className="list-size">
        <div className=" ">

          <div className="country">{name}</div>
          <div>
            $
            {price}
          </div>
          <img src={logo} alt={name} className="img-logo" />
        </div>
      </li>
    </NavLink>
  );
}

CryptoList.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default CryptoList;
