import styled from 'styled-components';
import BreakPoints from 'shared/break-points';
import Colors from 'shared/colors';

export const ToolsList = styled.ul`
  border-style: solid;
  border-width: 0;
  display: -ms-flexbox;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;
  justify-content: flex-end;
  line-height: 1.5;

  @media (min-width: ${BreakPoints.largedevices}) {
    display: flex;
  }
`;

export const Link = styled.a`
  color: ${Colors.white};
  margin-right: 2rem;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  border-radius: 0.1rem;
  border: 0.1rem solid #fff;
  padding: 0.1rem 0.3rem;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.darkBlue};
  }
`;
