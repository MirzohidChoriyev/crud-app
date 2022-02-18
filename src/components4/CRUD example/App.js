import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUsers from "./AddUsers";
import AllUsers from "./AllUsers";
import Home from "./Home";
import Navbar from "./Navbar";
import Notfound from "./Notfound";
import Update from "./Update";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all" element={<AllUsers />} />
          <Route exact path="/add" element={<AddUsers />} />
          <Route exact path="/edit/:id" element={<Update />} />
          <Route path="/found" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
