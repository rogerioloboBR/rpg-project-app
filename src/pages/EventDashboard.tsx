import React, { useEffect } from 'react';
import { useEvents } from '../features/events/useEvents';

const EventDashboard: React.FC = () => {
  const { events, status, error, loadEvents } = useEvents();

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <div>
      <h1>Event Dashboard</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventDashboard;
