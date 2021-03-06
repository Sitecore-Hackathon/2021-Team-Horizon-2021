import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as Routes from 'routes';

import { HomeIcon, ShopIcon } from 'components/icons';

const Link = styled(NavLink)`
  text-decoration: none;
  transition: color 0.1s;
  color: ${(p) => p.theme.colors.text.primary};
  display: block;
  padding-left: ${(p) => p.theme.spacing.xs};

  &:hover,
  &.selected {
    color: ${(p) => p.theme.colors.primary.main};
    background-color: ${(p) => p.theme.colors.grey[100]};

    svg path {
      fill: ${(p) => p.theme.colors.primary.main};
    }

    @media (min-width: ${(p) => p.theme.screen.md}) {
      background-color: ${(p) => p.theme.colors.white};
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 40px;
  font-size: ${(p) => p.theme.font.size.xs};
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  margin-left: ${(p) => p.theme.spacing.sm};
`;

/**
 * Navigation component used in SideBar
 */
const Navigation = () => {
  return (
    <List>
      <Link exact activeClassName="selected" to={Routes.HOME}>
        <ListItem>
          <HomeIcon />
          <Name>Home</Name>
        </ListItem>
      </Link>
      
      <Link exact activeClassName="selected" to={Routes.SHOP}>
        <ListItem>
          <ShopIcon />
          <Name>Shop</Name>
        </ListItem>
      </Link>      
    </List>
  );
};

export default Navigation;
