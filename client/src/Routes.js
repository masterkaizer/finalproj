import Signup from "./Components/Signup";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. (can add nav bar above)*/}
        <Switch>
          <Route path="/">
            <Signup />
          </Route>
       
        </Switch>
      </div>
    </Router>
  );
}