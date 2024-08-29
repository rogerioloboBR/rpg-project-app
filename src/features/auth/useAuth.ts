// src/features/auth/useAuth.ts
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { loginUser as apiLoginUser } from './authApi';

export const useAuth = () => {
  const dispatch = useDispatch();

  const loginUser = async (username: string, password: string) => {
    try {
      const user = await apiLoginUser(username, password); // Alterado para usar a função correta
      dispatch(login(user));
    } catch (error) {
      // Handle error
    }
  };

  return { loginUser };
};
