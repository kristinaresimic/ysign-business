import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/Home';
import { TermsOfUse } from './pages/TermsOfUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/terms">
            <TermsOfUse />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
