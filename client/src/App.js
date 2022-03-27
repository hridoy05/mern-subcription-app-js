import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthRoute from "./components/routes/AuthRoute";

import StripeSuccess from "./pages/stripe-success";
import StripeCancel from "./pages/stripe-cancel";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Account from "./pages/Account";
import Basic from "./pages/plans/Basic";
import Standard from "./pages/plans/Standard";
import Premium from "./pages/plans/Premium";

function App() {
  return (
    <Router>
      <Nav />
      <Toaster
        position="buttom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/stripe/success" component={StripeSuccess} />
        <AuthRoute exact path="/stripe/cancel" component={StripeCancel} />
        <AuthRoute exact path="/account" component={Account} />
        <AuthRoute exact path="/basic" component={Basic} />
        <AuthRoute exact path="/standard" component={Standard} />
        <AuthRoute exact path="/premium" component={Premium} />
      </Switch>
    </Router>
  );
}

export default App;
