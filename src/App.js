import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HeroesFeatured from "./Components/HeroesFeatured/HeroesFeatured";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <main>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<HeroesFeatured className="featured__list" />}
              />
              <Route path="/search/:name" />
              <Route path="/hero/:id" />
            </Routes>
          </div>
        </main>

        <footer>
          <div className="container">
            {/* <img src={require("./menu.png")}></img> */}
            <p>
              This content is kindly provided by{" "}
              <a href="https://superheroapi.com/">Superhero API</a>
            </p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
