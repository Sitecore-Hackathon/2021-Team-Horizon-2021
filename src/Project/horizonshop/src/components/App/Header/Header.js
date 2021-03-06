import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

import { MenuIcon, CartIcon } from 'components/icons';
import { Container, Spacing } from 'components/Layout';
import { A } from 'components/Text';
import { Button } from 'components/Form';
import HeaderDropDowns from './HeaderDropDowns';

import { useClickOutside } from 'hooks/useClickOutside';

import { useStore } from 'store';

import { HEADER_HEIGHT } from 'constants/Layout';
import SiteInfo from 'constants/SiteInfo.json';

import * as Routes from 'routes';

const Root = styled(Container)`
  position: sticky;
  top: 0;
  background-color: ${(p) => p.theme.colors.white};
  z-index: ${(p) => p.theme.zIndex.md};
  height: ${HEADER_HEIGHT}px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};

  @media (min-width: ${(p) => p.theme.screen.md}) {
    z-index: ${(p) => p.theme.zIndex.md};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    width: ${(p) => p.theme.screen.lg};
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Hamburger = styled.div`
  cursor: pointer;

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: none;
  }
`;

const Logo = styled(A)`
  display: none;
  color: ${(p) => p.theme.colors.primary.main};
  font-weight: ${(p) => p.theme.font.weight.bold};
  font-size: ${(p) => p.theme.font.size.sm};

  &:hover {
    color: ${(p) => p.theme.colors.primary.main};
  }

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: block;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const countCSS = css`
  top: -6px;
  position: absolute;
  height: 22px;
  width: 22px;
  padding: 2px;
  letter-spacing: -1px;
  border-radius: 50%;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.error.main};
  font-size: ${(p) => p.theme.font.size.xxs};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NotificationCount = styled.span`
  ${countCSS};
  right: 54px;
`;

const MessageCount = styled.span`
  ${countCSS};
  right: 100px;
`;


const CartCount = styled.span`
  ${countCSS};
  right: 146px;
`;
/**
 * Header of the App when user is authenticated
 */
const Header = ({ location, toggleSideBar }) => {
  const [{ cart }] = useStore();

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownData, setDropdownData] = useState([]);

  const cartRef = useRef(null);

  const closeOnClickOutside = () => {
    if (dropdownOpen) {
      closeDropDown();
    }
  };

  useClickOutside(cartRef, closeOnClickOutside);

  const closeDropDown = () => {
    setDropdownOpen(null);
    setDropdownData([]);
  };

  useEffect(() => {
    return () => closeDropDown();
  }, [location.pathname]);

  const handleIconClick = (dropdownType) => {
    if (dropdownOpen) {
      closeDropDown();
    } else {
      if (dropdownType === 'CART') {
        setDropdownData(cart.cartItems);
      }

      setDropdownOpen(dropdownType);
    }
  };

  const cartItemsCount = () => {
    return cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);
  }

  return (
    <Root>
      <Wrapper>
        <LeftSide>
          <Hamburger onClick={toggleSideBar}>
            <MenuIcon />
          </Hamburger>

          <Logo to={Routes.HOME}>{SiteInfo.name}</Logo>

          <Spacing left="sm" right="md">
            <div location={location} placeholder="Search" />
          </Spacing>
        </LeftSide>

        <RightSide>
          <Spacing right="md">
            <Button ghost onClick={() => handleIconClick('CART')}>
              { cartItemsCount() > 0 && (
                <CartCount>{ cartItemsCount() }</CartCount>
              )}

              <CartIcon />
            </Button>
          </Spacing>

        </RightSide>

        <HeaderDropDowns
          cartRef={cartRef}
          dropdownOpen={dropdownOpen}
          dropdownData={dropdownData}
          closeDropDown={closeDropDown}
        />
      </Wrapper>
    </Root>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default withRouter(Header);
