import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const favoritesSlice = createSlice({
 name: 'favorites',
  initialState,
 reducers: {
   addFavorite: (state, action) => {
     state.value.push(action.payload);
   },
   removeFavorites: (state, action) => {
    state.value = state.value.filter(e=>e.id != action.payload)
  },
  setFavoriteCount: (state, action) => {
    state.value = state.value.map(e=>e.id === action.payload.id ? (e.count = action.payload.count,e) : e)
  },
 },
});

export const { addFavorite,removeFavorites ,setFavoriteCount} = favoritesSlice.actions;
export default favoritesSlice.reducer;