import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUsers from "./AddUsers";
import AllUsers from "./AllUsers";
import EditUsers from "./EditUsers";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/adduser" exact element={<AddUsers />} />
          <Route path="/alluser" exact element={<AllUsers />} />
          <Route path="/edituser/:id" exact element={<EditUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
