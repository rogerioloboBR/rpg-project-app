import React from 'react';
import { Typography, Paper, Grid, Container } from '@mui/material';

const Dashboard: React.FC = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Admin Dashboard
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">120</Typography>
          {/* Você pode adicionar gráficos ou outras informações aqui */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Total Events</Typography>
          <Typography variant="h4">45</Typography>
          {/* Mais informações ou gráficos */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Pending Requests</Typography>
          <Typography variant="h4">7</Typography>
          {/* Mais informações ou gráficos */}
        </Paper>
      </Grid>
      {/* Adicione mais cartões ou seções conforme necessário */}
    </Grid>
  </Container>
);

export default Dashboard;
