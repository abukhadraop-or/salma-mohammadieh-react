import styled from 'styled-components';
import BreakPoints from 'shared/break-points';

export const Nav = styled.nav`
  align-content: left;
  align-items: left;
  color: white;
  display: flex;
  display: grid;
  font-size: 1.1rem;
  gap: 2rem;
  grid-template-columns: auto;
  justify-content: space-between;
  padding-bottom: 5rem;
  padding-top: 5rem;
  row-gap: 2rem;

  & > div {
    padding-right: 2.5rem;
  }

  @media (min-width: ${BreakPoints.mobile}) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${BreakPoints.largedevices}) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

export const H3 = styled.h3`
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  line-height: 1.3em;
  margin: 0;
  white-space: nowrap;

  @media (min-width: ${BreakPoints.largedevices}) {
    margin-top: 2rem;
  }
`;

export const List = styled.ul`
  margin-top: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  line-height: 1.6em;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LogoDiv = styled.div`
  display: none;

  @media (min-width: ${BreakPoints.largedevices}) {
    display: inherit;
  }
`;

export const Footer = styled.footer`
  align-content: space-between;
  align-items: center;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background: #031d33;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding-left: 1rem;
  width: 100vw;

  @media (min-width: ${BreakPoints.mobile}) {
    justify-content: center;
  }
`;
