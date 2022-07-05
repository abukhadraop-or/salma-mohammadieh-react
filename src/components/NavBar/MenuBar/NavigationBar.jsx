import React from 'react';
import { FaList, FaUserAlt, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Ui = styled.ul`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    &>Li{
        display: flex;
        padding:0.5rem;
    }
    @media (min-width: 970px) {
        display: none;
    }
  }
`;

const Div = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > Li {
    display: flex;
    padding: 0.5rem;
  }
`;

const Li = styled.li`
  width: 33%;
`;

const CenteredLi = styled(Li)`
  justify-content: center;
`;

/**
 * Component for showing the navigation bar in the navbar.
 *
 * @component
 */

function NavigationBar() {
  return (
    <Ui>
      <Li>
        <a href="/">
          <span>
            <FaList color="White" size="1.4rem" />
          </span>
        </a>
      </Li>
      <CenteredLi>
        <a href="/">
          {' '}
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width="55"
            height="40"
          />
        </a>
      </CenteredLi>
      <Div>
        <li>
          <a href="/">
            <span>
              <FaUserAlt color="White" size="1.4rem" />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <FaSearch color="blue" size="1.4rem" />
            </span>
          </a>
        </li>
      </Div>
    </Ui>
  );
}

export default NavigationBar;
