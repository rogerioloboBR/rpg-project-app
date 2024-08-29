import React, { useEffect } from 'react';
import { useProfiles } from '../features/profiles/useProfiles';

const CollectiveDashboard: React.FC = () => {
  const { profiles, status, error, loadProfiles } = useProfiles();

  useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);

  return (
    <div>
      <h1>Collective Dashboard</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {profiles.map(profile => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectiveDashboard;
