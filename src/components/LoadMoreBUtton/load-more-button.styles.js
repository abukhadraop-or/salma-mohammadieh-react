import styled from 'styled-components';
import Colors from 'shared/colors';

export const LoadButton = styled.div`
  align-items: center;
  background-color: ${Colors.blue};
  border-radius: 0.5rem;
  display: flex;
  grid-column-end: 3;
  grid-column-start: 2;
  justify-content: center;
`;

export const PlaceHolder = styled.p`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Text = styled.a`
  color: ${Colors.white};
  text-decoration: none;
`;
