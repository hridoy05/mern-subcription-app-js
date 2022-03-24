import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

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
      </Switch>
    </Router>
  );
}

export default App;
