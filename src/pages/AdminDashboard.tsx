import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AdminDashboard: React.FC = () => (
  <div>
    <Header />
    <Sidebar />
    <main>
      <h2>Admin Dashboard</h2>
      {/* Add admin dashboard content here */}
    </main>
  </div>
);

export default AdminDashboard;
