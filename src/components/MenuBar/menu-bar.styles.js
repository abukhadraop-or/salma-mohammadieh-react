import styled from 'styled-components';
import BreakPoints from 'shared/break-points';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
  width: 100%;

  @media (min-width: ${BreakPoints.largedevices}) {
    width: auto;
  }
`;

export const Logo = styled.a`
  display: none;

  @media (min-width: ${BreakPoints.largedevices}) {
    display: inherit;
  }
`;

export const ListItemContainer = styled.div`
  align-items: stretch;
  border-style: solid;
  border-width: 0;
  display: -ms-flexbox;
  display: none;
  justify-content: flex-end;
  line-height: 1.5;
  outline: 0;

  @media (min-width: ${BreakPoints.largedevices}) {
    display: inherit;

    & > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
