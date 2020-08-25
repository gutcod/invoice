import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Terminal } from "./pages/Terminal";
import { NavBar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { Buyers } from "./pages/Buyers";
import Auth from "./container/Auth";
// import { Page404 } from "./pages/Page404";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <Alert />
          <div className="container pt-4">
            <Switch>
              <Route path="/" exact component={Auth} />
              <Route path="/terminal" component={Terminal} />
              <Route path="/buyers" component={Buyers} />
              {/* <Redirect path="/" exact component={Page404} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
