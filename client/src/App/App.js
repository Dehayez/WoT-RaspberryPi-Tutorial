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
          <RouteWithLayout exact path={Routes.SETUP1} component={Pages.Setup01Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.SETUP2} component={Pages.Setup02Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.SETUP3} component={Pages.Setup03Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.SETUP4} component={Pages.Setup04Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.SETUP5} component={Pages.Setup05Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.GAMES1} component={Pages.Games01Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.GAMES2} component={Pages.Games02Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.GAMES3} component={Pages.Games03Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.GAMES4} component={Pages.Games04Page} layout={Layouts.TutorialLayout} />
          <RouteWithLayout exact path={Routes.GAMES5} component={Pages.Games05Page} layout={Layouts.TutorialLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
