// src/features/profiles/profilesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Profile {
  id: string;
  name: string;
}

interface ProfilesState {
  profiles: Profile[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProfilesState = {
  profiles: [],
  status: 'idle',
  error: null,
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<Profile[]>) => {
      state.profiles = action.payload;
    },
    // Adicione aqui qualquer ação adicional se necessário
  },
  extraReducers: (builder) => {
    // Adicione qualquer extraReducer se necessário
  }
});

export const { setProfiles } = profilesSlice.actions;
export default profilesSlice.reducer;
