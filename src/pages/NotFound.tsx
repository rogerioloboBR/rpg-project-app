import React from 'react';
import Header from '../components/Header';

const NotFound: React.FC = () => (
  <div>
    <Header />
    <main>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </main>
  </div>
);

export default NotFound;
