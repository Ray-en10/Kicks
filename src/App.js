import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/Login";
import Admin from "./components/Admin/Admin";
import Addprod from "./components/Admin/Addprod";
import Addcat from "./components/Admin/Addcat";
import Categorylist from "./components/Admin/Categorylist";
import Updatecat from "./components/Admin/Updatecat";
import Updateprod from "./components/Admin/Updateprod";
import Sneakers from "./components/Sneakers";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Sneakers" element={<Sneakers />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Addprod" element={<Addprod />} />
      <Route path="/Addcat" element={<Addcat />} />
      <Route path="/Categorylist" element={<Categorylist />} />
      <Route path="/Updateprod/:id" element={<Updateprod />} />
      <Route path="/Updatecat/:id" element={<Updatecat />} />
    </Routes>
  );
}

export default App;
