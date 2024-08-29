import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const PlayerDashboard: React.FC = () => (
  <div>
    <Header />
    <Sidebar />
    <main>
      <h2>Player Dashboard</h2>
      {/* Add content for player dashboard here */}
    </main>
  </div>
);

export default PlayerDashboard;
