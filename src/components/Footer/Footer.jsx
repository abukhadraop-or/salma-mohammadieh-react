import React from 'react';
import * as styles from './footer.styles';

/**
 * Render a Footer component
 *
 * @return {JSX.Element}
 */

function Footer() {
  return (
    <styles.Footer>
      <styles.Nav>
        <styles.LogoDiv>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />
        </styles.LogoDiv>
        <div>
          <styles.H3>THE BASICS</styles.H3>
          <styles.List>
            <styles.ListItem>About TMDB</styles.ListItem>
            <styles.ListItem>Contact Us</styles.ListItem>
            <styles.ListItem>Support Forums</styles.ListItem>
            <styles.ListItem>Api</styles.ListItem>
            <styles.ListItem>System Status</styles.ListItem>
          </styles.List>
        </div>
        <div>
          <styles.H3>GET INVOLVED</styles.H3>
          <styles.List>
            <styles.ListItem>Contribution Bible</styles.ListItem>
            <styles.ListItem>Add New Movie</styles.ListItem>
            <styles.ListItem>Add New TV Show</styles.ListItem>
          </styles.List>
        </div>
        <div>
          <styles.H3>COMMUNITY</styles.H3>
          <styles.List>
            <styles.ListItem>Guidlines</styles.ListItem>
            <styles.ListItem>Discussions</styles.ListItem>
            <styles.ListItem>Leadboard</styles.ListItem>
            <styles.ListItem>Twitter</styles.ListItem>
            <styles.ListItem>System Status</styles.ListItem>
          </styles.List>
        </div>
        <div>
          <styles.H3>LEGAL</styles.H3>
          <styles.List>
            <styles.ListItem>Terms of Use</styles.ListItem>
            <styles.ListItem>API Terms of Use</styles.ListItem>
            <styles.ListItem>Privacy Policy</styles.ListItem>
          </styles.List>
        </div>
      </styles.Nav>
    </styles.Footer>
  );
}

export default Footer;
