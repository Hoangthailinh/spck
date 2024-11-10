import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./Page/Home";
import Discover from "./Page/Discover";
import Albums from "./Page/Albums";
import Artists from "./Page/Artists";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
