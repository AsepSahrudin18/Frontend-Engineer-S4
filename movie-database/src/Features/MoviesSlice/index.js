import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constanst/data";

/**
 * Buat slice: untuk generate action dan reducer
 * Menerima parameter object: name, initialState, reducer
 */

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // addMovie to moives
      state.movies.push(action.payload);
    },
    deleteMovie() {},
    updateMovies() {},
  },
});

//  generate action dan reducer
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;
// export action dan reducer
export default moviesReducer;
export { addMovie, deleteMovie };
