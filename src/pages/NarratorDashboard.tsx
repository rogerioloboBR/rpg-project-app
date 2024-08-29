import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const NarratorDashboard: React.FC = () => (
  <div>
    <Header />
    <Sidebar />
    <main>
      <h2>Narrator Dashboard</h2>
      {/* Add content for narrator dashboard here */}
    </main>
  </div>
);

export default NarratorDashboard;
