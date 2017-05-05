import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import CounterPage from './containers/CounterPage';
import TodoPage from './containers/TodoPage';
import NoglePage from './containers/NoglePage';
import APage from './containers/APage';
import BPage from './containers/BPage';

const chosenVariation = window.cxApi.chooseVariation();
console.warn(chosenVariation);
const AorB = chosenVariation ? APage : BPage;

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="counter" />
    <Route path="counter" component={CounterPage} />
    <Route path="todo" component={TodoPage} />
    <Route path="nogle" component={NoglePage} />
    <Route path="aorb" component={AorB} />
  </Route>
);

export default routes;
