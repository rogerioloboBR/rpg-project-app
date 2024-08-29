import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Events from "./pages/EventDashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import Requests from "./pages/Requests";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import NarratorDashboard from "./pages/NarratorDashboard";
import PlayerDashboard from "./pages/PlayerDashboard";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/narratordashboard" element={<NarratorDashboard />} />
      <Route path="/playerdashboard" element={<PlayerDashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/add" element={<AddEvent />} />
      <Route path="/events/edit/:id" element={<EditEvent />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
