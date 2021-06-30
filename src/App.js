import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ReactQueryConfigProvider } from 'react-query'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './index.css';

import theme from 'utils/theme';

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'
import Budget from 'pages/Budget';

toast.configure();

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' }
          ]}
          RightElement={(
            <div>
              <Button variant="regular" onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button variant="regular" onClick={() => i18n.changeLanguage('en')}>en</Button>
            </div>
          )}
        />

        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">
              <Budget />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </Fragment>
  );
}

const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
}

function RootApp() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<LoadingIndicator />}>
          <App />
        </React.Suspense>
      </ThemeProvider>
    </ReactQueryConfigProvider>
  )
}

export default RootApp;
