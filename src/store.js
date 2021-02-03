import { createSlice, configureStore } from '@reduxjs/toolkit';

const Movies = createSlice({
    name: 'movieReducer',
    initialState: [],
    reducers: {
        addMovie: (state, action) => action.payload
    }
});

const store = configureStore({ reducer: Movies.reducer });

export const { addMovie } = Movies.actions;

export default store;