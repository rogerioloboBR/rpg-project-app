import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const [setting1, setSetting1] = useState(''); // Configurações reais aqui
  const [setting2, setSetting2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicione lógica para atualizar configurações
    navigate('/dashboard');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        General Settings
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Setting 1"
            fullWidth
            margin="normal"
            value={setting1}
            onChange={(e) => setSetting1(e.target.value)}
          />
          <TextField
            label="Setting 2"
            fullWidth
            margin="normal"
            value={setting2}
            onChange={(e) => setSetting2(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Settings;
