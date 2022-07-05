import React from 'react';
import styled from 'styled-components';
import MenuBar from './MenuBar/MenuBar';
import ToolsBar from './ToolsBar/ToolsBar';

const SubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 970px) {
    max-width: 85rem;
    padding: 0 40px;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

/**
 * Component for showing the navbar which contains menubar and toolsbar
 *
 * @component
 */

function NavBar() {
  return (
    <MainDiv>
      <SubDiv>
        <MenuBar />
        <ToolsBar />
      </SubDiv>
    </MainDiv>
  );
}

export default NavBar;
