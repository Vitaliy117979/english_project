import { createSlice } from '@reduxjs/toolkit';

export const wordSlise = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
    deleteWord(state, action){
        const index = state.findIndex(word => word.id === action.payload)
       state.splice(index, 1)
    }
  },
});

export const wordsReducer = wordSlise.reducer;
export const {addWord} = wordSlise.actions
export const {deleteWord} = wordSlise.actions

