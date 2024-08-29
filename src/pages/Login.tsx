// src/pages/Login.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../features/auth/useAuth';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { loginUser } = useAuth(); // Atualize a desestruturação

  const handleLogin = async () => {
    try {
      await loginUser('username', 'password'); // Adapte conforme necessário
    } catch (error) {
      // Lidar com erro
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
