import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Ul = styled.ul`
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  flex-direction: row;
  font-size: 1rem;
  line-height: 1.5;
  display: -ms-flexbox;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: flex-end;
  display: none;

  @media (min-width: 970px) {
    display: flex;
  }
`;

const A = styled.a`
  text-decoration: none;
  margin-right: 2rem;
  color: white;
`;

const StyledA = styled(A)`
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 3px 5px;
  &:hover {
    background-color: white;
    color: rgba(3, 37, 65, 1);
  }
`;

/**
 * Component for showing tools bar in the menu bar
 *
 * @component
 */

function ToolsBar() {
  return (
    <div>
      <Ul>
        <li>
          <A href="/">
            <span>
              <FaPlus color="white" size="1.4rem" />
            </span>
          </A>
        </li>
        <li>
          <StyledA href="/">EN</StyledA>
        </li>
        <li>
          <A href="/">Login</A>
        </li>
        <li>
          <A href="/">Join TMDB</A>
        </li>
        <li>
          <span>
            <FaSearch color="blue" size="1.4rem" />
          </span>
        </li>
      </Ul>
    </div>
  );
}

export default ToolsBar;
