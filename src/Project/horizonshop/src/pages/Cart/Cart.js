import React from 'react';

import { Spacing, Container } from 'components/Layout';
import styled from 'styled-components';
import Head from 'components/Head';
import ShoppingBagItems from './ShoppingBagItems';

import { useStore } from 'store';
import { generatePath } from 'react-router-dom';
import { A } from 'components/Text';

import * as Routes from 'routes';

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

const ProductTotal = styled.div`
  font-size: ${(p) => p.theme.font.size.md};
  color: ${(p) => p.theme.colors.text.primary};
`;


const Bold = styled.span`
  font-size: ${(p) => p.theme.font.size.m};
  border-bottom: 1px solid ${(p) => p.theme.colors.border.light};
  padding: ${(p) => p.theme.spacing.xxs};
`;

/**
 * Shopping bag page of the app
 */
const Cart = () => {
    const [{ cart }] = useStore();

    const cartItemTotal = () => {
      return cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price2,0 );
    }
    const cartItemsCount = () => {
      return cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);
    }

    return (
        <Container maxWidth="sm">         
          <Head title="Shopping bag" />    
          
          <Spacing top="lg" bottom="lg">           
            Your bag contains <Bold>{cartItemsCount()}</Bold>items and comes to a total of<Bold>£{cartItemTotal()}.</Bold>   
          </Spacing>

          <ShoppingBagItems itemsData = {cart.cartItems} />

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
                  <Link to={generatePath(Routes.CART_CHECKOUT)}>GO TO CHECKOUT</Link>
                </Info> 
              </Product>
          </div>
        </Container>
      );
};

export default Cart;