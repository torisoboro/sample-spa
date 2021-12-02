import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./js/pages/home";
import { User } from "./js/pages/user";
import { Dashboard } from "./js/pages/dashboard";
import { NabVar } from "./js/component/navbar";

export default function App() {
  return (
    <Router>
      <>
        <NabVar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </>
    </Router>
  );
}
