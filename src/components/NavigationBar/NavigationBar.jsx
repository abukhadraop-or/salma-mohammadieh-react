import React, { useState, useCallback } from 'react';
import { FaList, FaUserAlt, FaSearch } from 'react-icons/fa';
import SideBar from 'components/SideBar/SideBar';
import * as styles from './navigation-bar';

/**
 * Render a NavigationBar component.
 *
 * @return {JSX.Element}
 */
function NavigationBar() {
  const [displayStatus, setDisplayStatus] = useState(true);
  /**
   * Sets the displayStatus on click.
   */
  const clickHandler = useCallback(
    () => setDisplayStatus(!displayStatus),
    [displayStatus]
  );

  return (
    <>
      <styles.SideBarContainer displayStatus={displayStatus}>
        <SideBar />
      </styles.SideBarContainer>
      <styles.NavigationItems>
        <styles.NavigationItem>
          <styles.Icon onClick={clickHandler}>
            <FaList color="White" size="1.4rem" />
          </styles.Icon>
        </styles.NavigationItem>
        <styles.CenteredNavigationItem>
          <a href="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="The Movie Database (TMDB)"
              width="55"
              height="40"
            />
          </a>
        </styles.CenteredNavigationItem>
        <styles.Div>
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
        </styles.Div>
      </styles.NavigationItems>
    </>
  );
}

export default NavigationBar;
