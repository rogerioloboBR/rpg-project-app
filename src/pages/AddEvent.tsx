import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddEvent: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicionar lógica para enviar dados do evento
    navigate('/events');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Event
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

export default AddEvent;
