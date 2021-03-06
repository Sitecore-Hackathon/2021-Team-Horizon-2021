import React from 'react';

import { Spacing, Container } from 'components/Layout';
import Head from 'components/Head';

import { useStore } from 'store';


/**
 * Checkout page of the app
 */
const Checkout = () => {
    const [{ cart }] = useStore();
    return (
        <Container maxWidth="sm">         
          <Head title="Your checkout" />    
          
          <Spacing top="lg" bottom="lg">           
            Your checkout   
          </Spacing>

        </Container>
      );
};

export default Checkout;