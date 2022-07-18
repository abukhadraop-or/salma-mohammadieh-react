import styled from 'styled-components';
import Colors from 'shared/colors';
import BreakPoints from 'shared/break-points';

export const RatingBody = styled.div`
  align-items: center;
  background: ${Colors.lightBlack};
  border-radius: 50%;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  position: absolute;
  width: 1.5rem;
`;

export const RatingRing = styled.div(
  ({ rating }) => `
  background: ${
    (rating >= 70 &&
      `conic-gradient(${Colors.lightGreen} ${rating}%, ${Colors.green} ${rating}%);`) ||
    (rating >= 40 &&
      `conic-gradient(${Colors.lightYellow} ${rating}%, ${Colors.yellow} ${rating}%);`) ||
    (rating < 40 &&
      `conic-gradient(${Colors.lightRed} ${rating}%, ${Colors.red} ${rating}%);`)
  };
  border-radius: 50%;
  height: 1.7rem;
  width: 1.7rem;
`
);

export const Percentage = styled.p`
  color: ${Colors.white};
  font-size: 0.6em;
  margin: 0;
  padding: 1rem;
`;

export const RatingContainer = styled.div`
  display: none;

  @media (min-width: ${BreakPoints.largedevices}) {
    align-items: center;
    background: ${Colors.lightBlack};
    border-radius: 50%;
    display: flex;
    height: 1.9rem;
    justify-content: center;
    position: relative;
    top: -1.5rem;
    transform: scale(1);
    transition: transform 0.2s;
    width: 1.9rem;
  }
`;
