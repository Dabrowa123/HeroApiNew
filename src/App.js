import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import HeroesFeatured from "./Components/HeroesFeatured/HeroesFeatured.js";
import Battle from "./Components/Battle/Battle.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchView from "./Components/SearchView/SearchView.js";
import HeroDetails from "./Components/HeroDetails/HeroDetails.js";
import BattleMainPage from "./Components/Battle/BattleMainPage.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}

        <main>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <LandingPage />
                    <br />
                    <HeroesFeatured className="featured__list" />
                    <br />
                    <BattleMainPage />
                  </>
                }
              />
              <Route path="/search/:name" element={<SearchView />} />
              <Route path="/hero/:id" element={<HeroDetails />} />
              <Route path="/battle" element={<Battle />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
