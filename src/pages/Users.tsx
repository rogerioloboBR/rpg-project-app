import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Users: React.FC = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Manage Users
    </Typography>
    <Button variant="contained" color="primary" component={Link} to="/add-user">
      Add User
    </Button>
    <TableContainer component={Paper} style={{ marginTop: 16 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Exemplo de dados estáticos */}
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>
              <Button variant="outlined" component={Link} to="/edit-user/1">Edit</Button>
              <Button variant="outlined" color="error" style={{ marginLeft: 8 }}>Delete</Button>
            </TableCell>
          </TableRow>
          {/* Adicione mais usuários conforme necessário */}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default Users;
