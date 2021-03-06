import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/client';

import { Spacing } from 'components/Layout';
import { H3 } from 'components/Text';
import { Button } from 'components/Form';

import { useStore } from 'store';

import { ADD_ITEM } from 'store/cart';

const Root = styled.div`
  width: 100%;
  border-radius: ${(p) => p.theme.radius.sm};
  padding-bottom: ${(p) => p.theme.spacing.xs};
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.border.main};
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  max-height: 700px;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: ${(p) => p.theme.spacing.sm};
`;

const Title = styled.div`
  word-break: break-word;
  white-space: pre-line;
`;

const BottomRow = styled.div`
  overflow: hidden;
`;

const CountAndIcons = styled.div`
  padding: 0 ${(p) => p.theme.spacing.sm};
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(p) => p.theme.spacing.xs};
  font-size: ${(p) => p.theme.font.size.xs};
  color: ${(p) => p.theme.colors.text.secondary};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(p) => p.theme.colors.border.main};
`;

/**
 * Component for rendering a product
 */
const ProductCard = ({ product, owner, openModal }) => {
  const [{ cart }, dispatch] = useStore();
  const client = useApolloClient();

  const addToCartHandler = () => {
    dispatch({ type: ADD_ITEM, payload: product });
  };

  return (
    <>
      <Root>

        <Spacing left="sm" bottom="sm" top="xs" right="sm">
          <Title>
            <H3>{product.title}</H3>
            <H3>£{product.price}</H3>
          </Title>
        </Spacing>


        {product.imagePublicId && <Poster src={product.imagePublicId} />}

        <BottomRow>
          <CountAndIcons>
              <Count>
                {product.condition}
                <Spacing />
                <Button  text>
                  {product.category}
                </Button>
              </Count>

              <Icons>
                  <Button fullWidth type="button" onClick={addToCartHandler} >                    
                    <Spacing inline left="md" right="xxs"><Title>Buy now</Title></Spacing>
                  </Button>               
              </Icons>
            </CountAndIcons>

        </BottomRow>
      </Root>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProductCard;
