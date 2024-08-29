// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const Sidebar: React.FC = () => (
  <div style={{ width: 240, height: '100vh', backgroundColor: '#f4f4f4' }}>
    <List>
      <ListItemButton component={Link} to="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={Link} to="/users">
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton component={Link} to="/events">
        <ListItemText primary="Events" />
      </ListItemButton>
      {/* Adicione mais itens conforme necessário */}
    </List>
  </div>
);

export default Sidebar;

