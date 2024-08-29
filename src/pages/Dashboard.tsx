// src/pages/Dashboard.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Statistics from '../components/Statistics';
import { Container, Grid } from '@mui/material';

const DashboardPage: React.FC = () => (
  <Grid container>
    <Grid item xs={12} sm={3}>
      <Sidebar />
    </Grid>
    <Grid item xs={12} sm={9}>
      <Dashboard />
      <Statistics /> {/* Adicione gráficos ou outras seções conforme necessário */}
    </Grid>
  </Grid>
);

export default DashboardPage;
