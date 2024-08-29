import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setProfiles } from './profilesSlice';
import { useEffect } from 'react';

// Atualize o hook para fornecer os dados necessários
export const useProfiles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profiles = useSelector((state: RootState) => state.profiles.profiles);
  const status = useSelector((state: RootState) => state.profiles.status);
  const error = useSelector((state: RootState) => state.profiles.error);

  const loadProfiles = async () => {
    try {
      const response = await fetch('/api/profiles');
      const data = await response.json();
      dispatch(setProfiles(data));
    } catch (error) {
      // Lidar com erro
    }
  };

  return { profiles, status, error, loadProfiles };
};
