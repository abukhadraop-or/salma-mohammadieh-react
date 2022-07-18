import React, { useState, useCallback } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as styles from './sort-column.styles';

/**
 * Render column with sort , filter and where to watch options.
 *
 * @param {function} onSelectChange Event get fired when select option has changed.
 *
 * @return {JSX.Element}
 */
function SortColumn({ onSelectChange }) {
  const [displayStatus, setDisplayStatus] = useState(true);

  /**
   * Handles the change in sort dropdown menu.
   *
   * @param {object} event Object contains event attributes.
   */
  const handleSelect = (event) => {
    onSelectChange(event.target.value);
  };

  /**
   * Sets the DisplayStatus on click.
   */
  const clickHandler = useCallback(
    () => setDisplayStatus(!displayStatus),
    [displayStatus]
  );

  const options = {
    'popularity.asc': 'Popularity Ascending',
    'popularity.desc': 'Popularity Descending',
    'primary_release_date.asc': 'Release Date Ascending',
    'primary_release_date.desc': 'Release Date Descending',
    'title.asc': 'Title (A-Z)',
    'title.desc': 'Title (Z-A)',
    'vote_average.asc': 'Rating Descending',
    'vote_average.desc': 'Rating Ascending',
  };

  return (
    <>
      <styles.Wrapper>
        <styles.SortCategory
          onClick={clickHandler}
          displayStatus={displayStatus}
        >
          <styles.Categories>Sort</styles.Categories>
          <styles.Icon>
            <FaAngleRight />
          </styles.Icon>
        </styles.SortCategory>
        <styles.Hidden displayStatus={displayStatus}>
          <styles.SortBy>Sort Results By</styles.SortBy>
          <styles.SelectItems name="sort" id="select" onChange={handleSelect}>
            {Object.keys(options).map((value, index) => (
              <styles.SelectItem key={index} value={value}>
                {options[value]}
              </styles.SelectItem>
            ))}
          </styles.SelectItems>
        </styles.Hidden>
      </styles.Wrapper>
      <styles.Wrapper>
        <styles.InnerContainer displayStatus={displayStatus}>
          <styles.Categories>Filters</styles.Categories>
          <styles.Icon>
            <FaAngleRight />
          </styles.Icon>
        </styles.InnerContainer>
      </styles.Wrapper>
      <styles.Wrapper>
        <styles.InnerContainer displayStatus={displayStatus}>
          <styles.Categories>Where To Watch</styles.Categories>
          <styles.Icon>
            <FaAngleRight />
          </styles.Icon>
        </styles.InnerContainer>
      </styles.Wrapper>
      <styles.Button type="button">Search</styles.Button>
    </>
  );
}

SortColumn.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};

export default SortColumn;
