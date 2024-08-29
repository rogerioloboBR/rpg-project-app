// src/features/events/eventsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: string;
  name: string;
}

interface EventsState {
  events: Event[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  status: 'idle',
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    },
    // Adicione aqui qualquer ação adicional se necessário
  },
  extraReducers: (builder) => {
    // Adicione qualquer extraReducer se necessário
  }
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
