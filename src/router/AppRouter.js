import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import BooksList from '../pages/BooksList';
import Login from '../components/Login';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
            <Switch>
              <Route component={BooksList} path="/Home" exact={true} />
              <Route component={Login} path="/" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
