import React from 'react';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';

import { A , H2} from 'components/Text';
import { Spacing, Container } from 'components/Layout';
import Head from 'components/Head';

import * as Routes from 'routes';

const Empty = styled.div`
  padding: ${(p) => p.theme.spacing.sm};
  border: 1px solid ${(p) => p.theme.colors.border.main};
  border-radius: ${(p) => p.theme.radius.sm};
  margin-top: ${(p) => p.theme.spacing.lg};
  background-color: ${(p) => p.theme.colors.white};
`;

const StyledA = styled(A)`
  text-decoration: underline;
  font-weight: ${(p) => p.theme.font.weight.bold};
`;

/**
 * Home page of the app
 */
const Home = () => {


  const renderContent = () => {


      return (
        <Empty>

        <H2>Sitecore Hackathon 2021 - Best use of Headless using JSS </H2>

          <StyledA to={generatePath(Routes.SHOP)}>Explore new products</StyledA> 

        </Empty>
      );
   
  };

  return (
    <Container maxWidth="sm">
      <Head />

      <Spacing top="lg" />

      {renderContent()}
    </Container>
  );
};

export default Home;
