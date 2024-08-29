import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState(''); // Preencher com dados reais
  const [email, setEmail] = useState(''); // Preencher com dados reais
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicionar lógica para atualizar dados do usuário
    navigate('/users');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditUser;
