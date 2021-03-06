import React from 'react';
import PropTypes from 'prop-types';
import {  withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Spacing } from 'components/MyLayout';
import Navigation from './Navigation';

import { SIDEBAR_DESKTOP_WIDTH, SIDEBAR_MOBILE_WIDTH, HEADER_HEIGHT } from 'constants/Layout';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: ${HEADER_HEIGHT + 40}px;
  height: 100%;
  width: ${SIDEBAR_MOBILE_WIDTH}px;
  transition: margin-left 0.2s ease-in-out;
  font-size: ${(p) => p.theme.font.size.xxs};
  z-index: ${(p) => p.theme.zIndex.sm};
  background-color: ${(p) => p.theme.colors.white};
  border-right: 1px solid ${(p) => p.theme.colors.border.main};

  @media (min-width: ${(p) => p.theme.screen.md}) {
    padding-top: 0;
    position: sticky;
    top: 100px;
    margin-left: ${(p) => (p.isOpen ? 0 : `-${SIDEBAR_DESKTOP_WIDTH}px`)};
    flex-basis: ${SIDEBAR_DESKTOP_WIDTH}px;
    flex-grow: 0;
    flex-shrink: 0;
    border: 0;
    background-color: transparent;
  }

  @media (max-width: ${(p) => p.theme.screen.md}) {
    margin-left: ${(p) => (p.isOpen ? 0 : `-${SIDEBAR_MOBILE_WIDTH}px`)};
  }
`;


/**
 * Left hand nav
 */
const SideBar = ({ location, isOpen, sideBarRef }) => {

  return (
    <Root isOpen={isOpen} ref={sideBarRef}>

      <Spacing top="sm" />

      <Navigation />
    </Root>
  );
};

SideBar.propTypes = {
  location: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default withRouter(SideBar);
