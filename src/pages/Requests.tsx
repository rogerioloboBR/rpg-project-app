import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const Requests: React.FC = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Pending Requests
    </Typography>
    <TableContainer component={Paper} style={{ marginTop: 16 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Request ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Exemplo de dados estáticos */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>
              <Button variant="outlined">Approve</Button>
              <Button variant="outlined" color="error" style={{ marginLeft: 8 }}>Reject</Button>
            </TableCell>
          </TableRow>
          {/* Adicione mais requisições conforme necessário */}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default Requests;
