import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  flex-direction: row;
  font-size: 1rem;
  line-height: 1.5;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  list-style-type: none;
  justify-content: flex-end;
  display: none;

  @media (min-width: 970px) {
    display: inherit;
  }
`;

const Li = styled.li`
  margin-right: 2rem;
  & > a {
    color: white;
    text-decoration: none;
  }
`;

/**
 * Component for showing list of links
 *
 * @component
 */

function ListItems() {
  return (
    <Ul>
      <Li>
        {' '}
        <a href="/">Movies</a>
      </Li>
      <Li>
        <a href="/">TVShows</a>
      </Li>
      <Li>
        <a href="/">People</a>
      </Li>
      <Li>
        <a href="/">More</a>
      </Li>
    </Ul>
  );
}

export default ListItems;
