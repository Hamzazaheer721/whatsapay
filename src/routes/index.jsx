import { memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeRoute from "./Home";

const RouterComponent = memo(() => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomeRoute} />
    </Switch>
  </Router>
));

export default RouterComponent;
