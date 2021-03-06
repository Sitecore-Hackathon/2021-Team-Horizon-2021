import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

import NotFound from 'components/NotFound';
import AppLayout from './AppLayout';
import ScrollToTop from './ScrollToTop';

import { useStore } from 'store';

/**
 * Root component of the app
 */
const App = () => {
  const [{ message }] = useStore();

  return (  
      <Router>
        <GlobalStyle />

        <ScrollToTop>
          <Switch>
              <Route exact render={() => <AppLayout  />} />
          </Switch>
        </ScrollToTop>

      </Router>   
  );
};

export default App;
