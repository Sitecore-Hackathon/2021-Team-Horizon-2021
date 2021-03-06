import React from 'react';

import { Container } from 'components/Layout';
import Head from 'components/Head';
import ShopProducts from './ShopProducts';



/**
 * Shop page 
 */
const Shop = () => {
    return (
        <Container maxWidth="sm">
            <Head title="Shop" />   

          <ShopProducts  />
        </Container>
      );
};

export default Shop;