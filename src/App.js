import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import Project from "./views/Project";
import Header from "./components/Header";
import Protected from "./components/Protected";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signin = () => {
    setIsSignedIn(true);
  };
  const signout = () => {
    setIsSignedIn(false);
  };
  return (
    <Router>
      {isSignedIn ? (
        <div className="d-grid mt-5">
          <button className="btn-danger" onClick={signout}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="d-grid mt-5">
          <button className="btn-dark" onClick={signin}>
            Sign in
          </button>
        </div>
      )}
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <div>
                  <Header />
                  <Dashboard />
                </div>
              </Protected>
            }
          />
          <Route
            exact
            path="/projects"
            element={
              <Protected isSignedIn={isSignedIn}>
                <div>
                  <Header />
                  <Project />
                </div>
              </Protected>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <div>
                <Header />
                <About />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
