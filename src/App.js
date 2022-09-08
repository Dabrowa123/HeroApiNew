import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HeroesFeatured from "./Components/HeroesFeatured/HeroesFeatured";

function App() {
  return (
    <>
      <Nav></Nav>

      <main>
        <div className="container">
          <HeroesFeatured className="featured__list" />
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
