import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const WrapperDiv = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 1rem;
  justify-content: space-between;
  padding: 0.9rem 1rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  margin-bottom: 0.8rem;
`;

const H2 = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  display: inline;
`;

const Div = styled.div`
  width: 100%;
`;

const SortDiv = styled.div(
  ({ displayStatus }) => `
padding-top:${displayStatus ? '0' : '0.5rem'};
border-bottom:${displayStatus ? '0' : '1px solid #e3e3e3'};
`
);

const Span = styled.span`
  float: right;
`;

const Button = styled.button`
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  line-height: 1;
  font-weight: 600;
  border-radius: 1.3rem;
  border-style: none;
  padding: 0.8rem;
`;

const H3 = styled.h3`
  color: #212529;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Select = styled.select`
  background-color: #e4e7eb;
  border: none;
  font-size: 0.8rem;
  width: 100%;
  padding: 0.4rem 0.8rem;
`;

const Option = styled.option`
  background-color: white;
`;

const HiddenDiv = styled.div(
  ({ displayStatus }) => `
  display:${displayStatus ? 'none' : 'inhirit'};
  padding-top:${displayStatus ? '0' : '0.5rem'};
  width: 100%;
`
);

/**
 * Component for displaying a column with sort , filter and where to watch options.
 *
 * @component
 */

function SortColumn({ onSelectChange }) {
  const [displayStatus, setDisplayStatus] = useState(true);

  /**
   * handles the change in sort dropdown menu
   */

  const handleSelect = (e) => {
    onSelectChange(e.target.value);
  };

  /**
   * sets the DisplayStatus on click
   */
  const clickHandler = useCallback(
    () => setDisplayStatus(!displayStatus),
    [displayStatus]
  );

  return (
    <>
      <WrapperDiv>
        <SortDiv onClick={clickHandler} displayStatus={displayStatus}>
          <H2>Sort</H2>
          <Span>
            <FaAngleRight />
          </Span>
        </SortDiv>
        <HiddenDiv displayStatus={displayStatus}>
          <H3>Sort Results By</H3>
          <Select name="sort" id="select" onChange={handleSelect}>
            <Option value="popularity.desc">Popularity Descending</Option>
            <Option value="popularity.asc">Popularity Ascending</Option>
            <Option value="vote_average.asc">Rating Descending</Option>
            <Option value="vote_average.desc">Rating Ascending</Option>
            <Option value="primary_release_date.desc">
              Release Date Descending
            </Option>
            <Option value="primary_release_date.asc">
              Release Date Ascending
            </Option>
            <Option value="title.asc">Title (A-Z)</Option>
            <Option value="title.desc">Title (Z-A)</Option>
          </Select>
        </HiddenDiv>
      </WrapperDiv>
      <WrapperDiv>
        <Div displayStatus={displayStatus}>
          <H2>Filters</H2>
          <Span>
            <FaAngleRight />
          </Span>
        </Div>
      </WrapperDiv>
      <WrapperDiv>
        <Div displayStatus={displayStatus}>
          <H2>Where To Watch</H2>
          <Span>
            <FaAngleRight />
          </Span>
        </Div>
      </WrapperDiv>
      <Button type="button">Search</Button>
    </>
  );
}

SortColumn.propTypes = {
  /**
   * select function
   */
  onSelectChange: PropTypes.func.isRequired,
};

export default SortColumn;
