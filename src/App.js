import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HeroesFeatured from "./Components/HeroesFeatured/HeroesFeatured";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <HeroesFeatured className="featured__list" />
              </Route>
              <Route path="/hero/:id"></Route>
            </Switch>
          </div>
        </main>

        <footer></footer>
      </Router>
    </>
  );
}

export default App;
