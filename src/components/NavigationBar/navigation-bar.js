import styled from 'styled-components';
import BreakPoints from 'shared/break-points';
import Colors from 'shared/colors';

export const NavigationItems = styled.ul`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0;
  max-width: 100%;
  padding: 0;
  width: 100%;

  & > NavigationItem {
    display: flex;
    padding: 0.5rem;
  }

  @media (min-width: ${BreakPoints.largedevices}) {
    display: none;
  }
`;

export const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 33%;

  & > NavigationItem {
    display: flex;
    padding: 0.5rem;
  }
`;

export const NavigationItem = styled.li`
  width: 33%;
`;

export const CenteredNavigationItem = styled(NavigationItem)`
  justify-content: center;
`;

export const SideBarContainer = styled.div`
  background-color: ${Colors.darkBlue};
  display: ${(props) => (props.displayStatus ? 'none' : 'block')};
  height: 100%;
  position: fixed;
  width: 90%;
  z-index: 2;
  top: 3.2rem;
  left: 0.5em;

  @media (min-width: ${BreakPoints.largedevices}) {
    display: none;
  }
`;

export const Icon = styled.span``;
