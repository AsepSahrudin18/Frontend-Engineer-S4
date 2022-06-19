// import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Features/MoviesSlice";

/**
 * Membuat store: state global
 * Menyimpan berbagai slice reducer
 */
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// export default store
export default store;
