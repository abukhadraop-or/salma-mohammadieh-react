import styled from 'styled-components';
import Colors from 'shared/colors';
import BreakPoints from 'shared/break-points';

export const CardContentDiv = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0.9rem;

  @media (min-width: ${BreakPoints.mobile}) {
    align-content: flex-start;
    padding: 0.5rem;
    width: 100%;
  }
`;

export const MovieTitle = styled.a`
  color: black;
  font-size: 1rem;
  overflow-wrap: break-word;
  text-align: left;
  text-decoration: none;
  width: 100%;
  word-wrap: normal;
`;

export const MovieDate = styled.p`
  color: ${Colors.black}99;
  font-size: 1rem;
  margin: 0;
`;

export const OverView = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 0.9rem;
  height: auto;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
`;
