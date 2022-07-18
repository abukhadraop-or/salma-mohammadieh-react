import styled from 'styled-components';
import Colors from 'shared/colors';

export const ListItems = styled.ul`
  font-size: 1rem;
`;

export const ListItem = styled.li`
  margin-right: 2rem;

  & > a {
    color: ${Colors.white};
    text-decoration: none;
  }
`;
