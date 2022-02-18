import React from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUsers from "./AddUsers";
import AllUsers from "./AllUsers";
import EditUser from "./EditUser";
import Interview from "./Interview";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Interview />} />
          <Route path="/all" exact element={<AllUsers />} />
          <Route path="/add" exact element={<AddUsers />} />
          <Route path="/not" exact element={<NotFound />} />
          <Route path="/edit/:id" exact element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
