import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import * as styles from './tools-bar.styles';

/**
 * Render ToolsBar component
 *
 * @return {JSX.Element}
 */
function ToolsBar() {
  return (
    <div>
      <styles.ToolsList>
        <li>
          <styles.Link href="/">
            <span>
              <FaPlus color="white" size="1.4rem" />
            </span>
          </styles.Link>
        </li>
        <li>
          <styles.StyledLink href="/">EN</styles.StyledLink>
        </li>
        <li>
          <styles.Link href="/">Login</styles.Link>
        </li>
        <li>
          <styles.Link href="/">Join TMDB</styles.Link>
        </li>
        <li>
          <span>
            <FaSearch color="blue" size="1.4rem" />
          </span>
        </li>
      </styles.ToolsList>
    </div>
  );
}

export default ToolsBar;
