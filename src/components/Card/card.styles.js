import styled from 'styled-components';
import BreakPoints from 'shared/break-points';
import Colors from 'shared/colors';

export const InnerContainer = styled.div`
  align-content: flex-start;
  background-color: ${(props) =>
    props.displayStatus ? 'none' : `${Colors.black}80`};
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: ${BreakPoints.mobile}) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const MovieImage = styled.img`
  display: inline-block;
  opacity: ${(props) => (props.displayStatus ? '' : '0.1')};
  width: 6rem;

  @media (min-width: ${BreakPoints.mobile}) {
    height: 100%;
    outline: none;
    width: auto;
  }
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  color: ${Colors.black}99;
  display: ${(props) => (props.displayStatus ? 'none' : `block`)};
  position: absolute;
  right: -3rem;
  top: 1.7rem;
  z-index: 10002;
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const OptionsIcon = styled.span`
  display: none;

  @media (min-width: ${BreakPoints.mobile}) {
    color: white;
    cursor: pointer;
    display: flex;
    padding: 0.6rem;
    position: absolute;
    right: 0;
    z-index: 1;

    &:hover {
      color: ${Colors.lightblue};
    }
  }
`;

export const ImageContainer = styled.div`
  display: inline;
  float: left;

  @media (min-width: ${BreakPoints.mobile}) {
    width: 100%;
  }
`;
