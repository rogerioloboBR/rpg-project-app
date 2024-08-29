import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const EditEvent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState(''); // Preencher com dados reais
  const [date, setDate] = useState(''); // Preencher com dados reais
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicionar lógica para atualizar dados do evento
    navigate('/events');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Event
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Event Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditEvent;
