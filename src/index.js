import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import About from "./About.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
/* Add basic styling for NavLinks */



// function App() {
//   return <Home />;
// }

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
