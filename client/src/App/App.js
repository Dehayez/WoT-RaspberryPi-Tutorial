import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.scss';
import * as Routes from './routes';

import { RouteWithLayout } from './utilities';
import * as Layouts from './layouts';
import * as Pages from './pages';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          <RouteWithLayout exact path={Routes.HOME} component={Pages.HomePage} layout={Layouts.BasicLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
