import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useStore } from 'store';
import { ADD_ITEM, REMOVE_ITEM } from 'store/cart';
import { A } from 'components/Text';
import { generatePath } from 'react-router-dom';
import * as Routes from 'routes';

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


const ProductAvatar= styled.img`
  width: 110px;
  height: 100px;
  border-radius: ${(p) => p.theme.radius.sm};
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

const AddRemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

const UpdateCartButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 30px;
  font-size: ${(p) => p.theme.font.size.m};
  color: ${(p) => p.theme.colors.red};;
`;

const Hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: ${(p) => p.theme.radius.sm};
  padding-bottom: ${(p) => p.theme.spacing.xs};
  background-color: ${(p) => p.theme.colors.white};
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};
`;

/**
 * Renders a single shopping bag product
 */
const ShoppingBagItem = ({ product }) => {
  const [{}, dispatch ] = useStore();
  const addToCartHandler = () => {
    dispatch({ type: ADD_ITEM, payload: product });
  };

  const removeCartItemhandler = () => {
    dispatch({ type: REMOVE_ITEM, payload: product });
  };

  return (
      <Root>
         <Product key={product.id}>          
          <A to={generatePath(Routes.HOME, { id: product.id })}>
            <ProductAvatar src={ product.image } />
          </A>
          <Info>
              <div>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDetails>Price: {product.price}</ProductDetails>
                  <ProductDetails>Qty: {product.quantity}</ProductDetails>
              
              <AddRemoveContainer>
                <UpdateCartButtons>
                  <Hover>
                    <span onClick={ removeCartItemhandler }>-</span>
                  </Hover>
                  <span>{product.quantity}</span>
                  <Hover>
                    <span onClick={ addToCartHandler }>+</span>  
                  </Hover>
                </UpdateCartButtons>
              </AddRemoveContainer>   
              </div>          
              <ProductAmount>£{product.quantity * product.price}</ProductAmount>
          </Info>
        </Product>
      </Root>
     );
  };

ShoppingBagItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShoppingBagItem;
