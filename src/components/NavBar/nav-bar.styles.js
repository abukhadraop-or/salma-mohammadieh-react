import styled from 'styled-components';
import BreakPoints from 'shared/break-points';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(3, 37, 65, 1);
  width: 100%;
  z-index: 10;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 1.5rem;
  position: relative;
  top: 0;
  width: 100%;

  @media (min-width: ${BreakPoints.largedevices}) {
    max-width: 85rem;
    padding: 0 2rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
