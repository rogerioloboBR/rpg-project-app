import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <Button onClick={onClick} variant="contained" color="primary">
    {children}
  </Button>
);

export default MyButton;
