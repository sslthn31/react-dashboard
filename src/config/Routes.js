import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
const Routes = () => {
  return (
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
