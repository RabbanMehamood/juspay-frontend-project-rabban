import React from "react";
import {  Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    
  );
}
