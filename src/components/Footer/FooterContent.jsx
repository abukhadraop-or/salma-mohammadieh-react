import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items:left;
  align-content:left;
  justify-content: space-between;
  padding-top 5rem;
  padding-bottom:5rem;
  font-size: 1.1rem;
  color: white;
  
  & > div {
  padding-right:2.5rem;
  }

  display: grid;
  gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: auto;

  @media (min-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 890px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 1.3em;
  line-height: 1.3em;
  color: white;
  white-space: nowrap;
  margin: 0;

  @media (min-width: 890px) {
    margin-top: 2rem;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
`;

const Li = styled.li`
  line-height: 1.6em;
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  cursor: pointer;
`;

const LogoDiv = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: inherit;
  }
`;

/**
 * Component for showing footer details .
 *
 * @component
 * return (
 *   <Nav/>
 * )
 */

function FooterContent() {
  return (
    <Nav>
      <LogoDiv>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="The Movie Database (TMDB)"
          width="130"
          height="94"
        />
      </LogoDiv>
      <div>
        <H3>THE BASICS</H3>
        <Ul>
          <Li>About TMDB</Li>
          <Li>Contact Us</Li>
          <Li>Support Forums</Li>
          <Li>Api</Li>
          <Li>System Status</Li>
        </Ul>
      </div>
      <div>
        <H3>GET INVOLVED</H3>
        <Ul>
          <Li>Contribution Bible</Li>
          <Li>Add New Movie</Li>
          <Li>Add New TV Show</Li>
        </Ul>
      </div>
      <div>
        <H3>COMMUNITY</H3>
        <Ul>
          <Li>Guidlines</Li>
          <Li>Discussions</Li>
          <Li>Leadboard</Li>
          <Li>Twitter</Li>
          <Li>System Status</Li>
        </Ul>
      </div>
      <div>
        <H3>LEGAL</H3>
        <Ul>
          <Li>Terms of Use</Li>
          <Li>API Terms of Use</Li>
          <Li>Privacy Policy</Li>
        </Ul>
      </div>
    </Nav>
  );
}

export default FooterContent;
