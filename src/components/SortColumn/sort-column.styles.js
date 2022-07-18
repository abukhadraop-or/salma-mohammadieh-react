import styled from 'styled-components';
import Colors from 'shared/colors';

export const Wrapper = styled.div`
  border-radius: 1rem;
  border: 0.1rem solid ${Colors.grey};
  box-shadow: 0 0.2rem 0.4rem rgb(0 0 0 / 10%);
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding: 0.9rem 1rem;
`;

export const Categories = styled.h2`
  display: inline;
  font-size: 1.1rem;
  margin: 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
`;

export const SortCategory = styled.div`
  border-bottom: ${(props) =>
    props.displayStatus ? '0' : '0.1rem solid #e3e3e3'};
  padding-top: ${(props) => (props.displayStatus ? '0' : '0.5rem')};
`;

export const Icon = styled.span`
  float: right;
`;

export const Button = styled.button`
  border-radius: 1.3rem;
  border-style: none;
  color: ${Colors.black}80;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1;
  padding: 0.8rem;
  width: 100%;
`;

export const SortBy = styled.h3`
  color: ${Colors.black};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const SelectItems = styled.select`
  background-color: ${Colors.lightGrey};
  border: none;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
`;

export const SelectItem = styled.option`
  background-color: ${Colors.white};
`;

export const Hidden = styled.div`
  display: ${(props) => (props.displayStatus ? 'none' : 'inhirit')};
  padding-top: ${(props) => (props.displayStatus ? '0' : '0.5rem')};
  width: 100%;
`;
