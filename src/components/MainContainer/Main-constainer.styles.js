import styled from 'styled-components';
import BreakPoints from 'shared/break-points';
import Colors from 'shared/colors';

export const Main = styled.div`
  align-content: flex-start;
  background-color: ${Colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 4rem;
  width: 100%;
`;

export const MainContainer = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (min-width: ${BreakPoints.mobile}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: 18% auto;
    max-width: 85rem;
  }
`;

export const Section = styled.section`
  align-content: flex-start;
  align-items: flex-start;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const InnerContainer = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: ${BreakPoints.mobile}) {
    width: 100%;
  }
`;

export const WrapperDiv = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 88rem;
  padding: 1.3rem;
  width: 100%;

  @media (min-width: ${BreakPoints.mobile}) {
    padding: 2rem 2.5rem;
  }
`;

export const Button = styled.button`
  background-color: ${Colors.blue};
  border-color: transparent;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  grid-column-end: 3;
  grid-column-start: 2;
  margin-top: 0.8rem;
  padding: 0.5rem;
  width: 100%;

  &:hover {
    color: black;
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: auto;
  row-gap: 2rem;

  & > div {
    background-color: white;
    border-radius: 0.5rem;
    border: 0.1rem solid ${Colors.grey};
    box-shadow: 0 0.2rem 0.4rem rgb(0 0 0 / 10%);
  }

  @media (min-width: ${BreakPoints.mobile}) {
    grid-template-columns: auto auto;
    padding: 0.7rem;
  }
  @media (min-width: ${BreakPoints.mediumDevices}) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: ${BreakPoints.largedevices}) {
    grid-template-columns: auto auto auto auto;
  }
  @media (min-width: ${BreakPoints.desktop}) {
    grid-template-columns: auto auto auto auto auto;
  }
`;
