import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, generatePath } from 'react-router-dom';

import SquareAvatar from 'components/SquareAvatar';
import { A } from 'components/Text';

import * as Routes from 'routes';

const Root = styled.div`
  position: absolute;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  background-color: white;
  right: 0;
  top: 60px;
  z-index: ${(p) => p.theme.zIndex.xl};
  box-shadow: ${(p) => p.theme.shadows.sm};

  @media (min-width: ${(p) => p.theme.screen.sm}) {
    width: 500px;
    right: 90px;
  }
`;

const Link = styled(A)`
  color: ${(p) => p.theme.colors.primary.main};
  font-size: ${(p) => p.theme.font.size.xs};

  &:hover {
    color: ${(p) => p.theme.colors.primary.main};
    text-decoration: underline;
  }
`;

const Product = styled.div`
  width: 100%;
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.xxs};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${(p) => p.theme.colors.text.primary};
  border-top: 1px solid ${(p) => p.theme.colors.border.main};

  &:hover {
    background-color: ${(p) => p.theme.colors.grey[100]};
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 0 ${(p) => p.theme.spacing.xs};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductTitle = styled.div`
  text-overflow: ellipsis;
  width: 100%;
`;

const ProductDetails = styled.div`
  margin-top: ${(p) => p.theme.spacing.xxs};
  font-size: ${(p) => p.theme.font.size.xxs};
  color: ${(p) => p.theme.colors.grey[500]};
  text-overflow: ellipsis;
`;

const ProductAmount = styled.div`
  font-size: ${(p) => p.theme.font.size.tiny};
  color: ${(p) => p.theme.colors.text.secondary};
`;

const ProductTotal = styled.div`
  font-size: ${(p) => p.theme.font.size.md};
  color: ${(p) => p.theme.colors.text.primary};
`;

const Empty = styled.div`
  padding: ${(p) => p.theme.spacing.xs};
`;

/**
 * Component that renders Header Cart's dropdown
 */
const HeaderCartDropdown = ({ cartRef, dropdownData }) => {
  const cartItemTotal = () => {
    return dropdownData.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price2,0 );
  }
  return (
    <Root ref={cartRef}>
      {!dropdownData.length ? (
        <Empty>No items</Empty>
      ) : (
          dropdownData.map((product) => (
            <Product key={product.id}>
              <span>
                <SquareAvatar image={product.image} size={50} />
              </span>
    
              <Info>
                <div>
                  <ProductTitle>{product.title}</ProductTitle>
    
                  <ProductDetails>Qty: {product.quantity}</ProductDetails>
                </div>
    
                <ProductAmount>£{product.quantity * product.price2}</ProductAmount>
              </Info>
            </Product>
          )
        )

      )}
      { dropdownData.length > 0 && 
        <div>
          <Product>
            <Info>
              <div>
                  <ProductTitle>Total</ProductTitle>
                  <ProductDetails>Includes UK Standard Delivery (Normally £3.99)</ProductDetails>
              </div>
              <ProductTotal>£{ cartItemTotal() }</ProductTotal>
            </Info>
          </Product>
          <Product>
            <Info>
              <Link to={generatePath(Routes.CART_SUMMARY)}>VIEW/EDIT BAG</Link>     
              <Link to={generatePath(Routes.CART_CHECKOUT)}>CHECKOUT</Link>
            </Info> 
          </Product>
        </div>
      }
    </Root>
  );
};

HeaderCartDropdown.propTypes = {
  cartRef: PropTypes.object,
  dropdownData: PropTypes.array,
};

export default HeaderCartDropdown;
