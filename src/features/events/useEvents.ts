import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setEvents } from './eventsSlice';
import { useEffect } from 'react';

// Atualize o hook para fornecer os dados necessários
export const useEvents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events.events);
  const status = useSelector((state: RootState) => state.events.status);
  const error = useSelector((state: RootState) => state.events.error);

  const loadEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      dispatch(setEvents(data));
    } catch (error) {
      // Lidar com erro
    }
  };

  return { events, status, error, loadEvents };
};
