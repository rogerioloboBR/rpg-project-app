import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Events: React.FC = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Manage Events
    </Typography>
    <Button variant="contained" color="primary" component={Link} to="/add-event">
      Add Event
    </Button>
    <TableContainer component={Paper} style={{ marginTop: 16 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Exemplo de dados estáticos */}
          <TableRow>
            <TableCell>Event 1</TableCell>
            <TableCell>2024-08-01</TableCell>
            <TableCell>
              <Button variant="outlined" component={Link} to="/edit-event/1">Edit</Button>
              <Button variant="outlined" color="error" style={{ marginLeft: 8 }}>Delete</Button>
            </TableCell>
          </TableRow>
          {/* Adicione mais eventos conforme necessário */}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default Events;
