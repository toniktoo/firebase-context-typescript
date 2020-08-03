import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from './constants/routes';
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/auth/Login';

const ProfileComponent = lazy(() => import('./components/ProfileComponent'));

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={''}>
        <ProfileComponent />
      </Suspense>
      <Switch>
        <Route path={routes.home} exact component={Content} />
        <Route path={routes.login} component={Login} />
        <Redirect to={routes.home} />
      </Switch>
    </Wrapper>
  );
};

export default App;
