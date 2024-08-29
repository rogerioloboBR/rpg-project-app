import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';
import Requests from './pages/Requests';
import Settings from './pages/Settings';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/events" element={<Events />} />
      <Route path="/add-event" element={<AddEvent />} />
      <Route path="/edit-event/:id" element={<EditEvent />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default AppRoutes;
