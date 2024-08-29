import { apiClient } from '../../services/apiClient';
import { endpoints } from '../../services/apiEndpoints';

export const loginUser = async (username: string, password: string) => {
  const response = await apiClient.post(endpoints.auth.me, { username, password });
  return response.data;
};
