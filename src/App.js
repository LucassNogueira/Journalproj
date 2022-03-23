import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Register from "./Components/Register";
import Login from "./Components/Login";
function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/feed"
          element={
            <Feed currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
