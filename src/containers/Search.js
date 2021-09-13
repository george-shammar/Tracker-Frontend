import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSearchTerm } from '../reducers/filter';
import '../stylesheets/Search.css';

const clearIcon = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/clear-16-216586.png';

const SearchTerm = ({ onSearch, onClear }) => {
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="search-container">
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Patient's name"
      />
      {searchTerm.length > 0 && (
      <button
        onClick={onClear}
        type="button"
        className="search-clear-button"
      >
        <img className="clear" src={clearIcon} alt="" />
      </button>
      )}
    </div>
  );
};

SearchTerm.propTypes = {
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

SearchTerm.defaultProps = {
  onSearch: null,
  onClear: null,
};

export default SearchTerm;
