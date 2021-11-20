import PropTypes from 'prop-types';
import React from 'react';

export default function Search(props) {
  const { search, onInput } = props;

  return (
    <div className="input-group input-group-sm mb-3 container">

      <input className="form-control" onInput={onInput} value={search} placeholder="search..." />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
