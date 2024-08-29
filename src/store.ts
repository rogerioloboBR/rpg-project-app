import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import eventsReducer from './features/events/eventsSlice';
import profilesReducer from './features/profiles/profilesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    profiles: profilesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
