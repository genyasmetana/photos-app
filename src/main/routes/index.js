import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PhotosList from "../../modules/photos-list";

export default function Routes() {
  return (
    <Switch>
      <Route path={["/liked", "/list"]}>
        <PhotosList />
      </Route>
      <Redirect to="/list" />
    </Switch>
  );
}
