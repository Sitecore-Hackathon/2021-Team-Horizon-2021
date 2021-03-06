import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/App/Header';
import NotFound from 'components/NotFound';
import SideBar from './SideBar';

import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';

import { HEADER_HEIGHT } from 'constants/Layout';

import { useWindowSize } from 'hooks/useWindowSize';
import { useClickOutside } from 'hooks/useClickOutside';

import * as Routes from 'routes';

import theme from 'theme';

import { useStore } from 'store';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  position: relative;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  
  @media (min-width: ${(p) => p.theme.screen.md}) {
    width: ${(p) => p.theme.screen.md};
  }

  @media (min-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    width: ${(p) => p.theme.screen.lg};
  }
`;

/**
 * Main layout
 */
const AppLayout = ({ location }) => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= parseInt(theme.screen.md, 10);
  const [isSideBarOpen, setIsSidebarOpen] = useState(isDesktop);

  const sideBarRef = useRef('');

  useClickOutside(sideBarRef, () => {
    if (!isDesktop && isSideBarOpen) {
      setIsSidebarOpen(false);
    }
  });

  useEffect(() => {
    setIsSidebarOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    return () => {
      if (!isDesktop) {
        setIsSidebarOpen(false);
      }
    };
  }, [location.pathname, isDesktop]);

  
  return (
    <>
      <Header toggleSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />

      <Root>
        <SideBar isOpen={isSideBarOpen} sideBarRef={sideBarRef} />

        <Switch>
          <Route exact path={Routes.HOME} component={Home} />

          <Route exact path={Routes.SHOP} component={Shop} />

          <Route exact path={Routes.CART_SUMMARY} component={Cart} />

          <Route exact path={Routes.CART_CHECKOUT} component={Checkout} />

          <Route component={NotFound} />
        </Switch>
      </Root>
    </>
  );
};

AppLayout.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(AppLayout);
