import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact component={HomePage} path="/"></Route>
        <Route component={ShopPage} path="/shop"></Route>
      </Switch>
    </div>
  );
}

export default App;
