import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect( () => {
    const token = JSON.stringify(localStorage.getItem("@CashUsers:token"));
    if(token) {
      return setAuthenticated(true);
    }
  },[authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path="/Login">
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route path="/Dashboard">
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
    </Switch>
  );
}
export default Routes;
