import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  filtered: [],
  loading: false,
};

export const fetchApi = createAsyncThunk(
  "movies/fetchMovies",
  async (thunkAPI) => {
    const v3AuthTMBD = "9d496268ea538538973d8f0304a84740";
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${v3AuthTMBD}`
    );
    const movies = await data.json();
    console.log("Thunk Middle");
    return movies.results;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      if (action.payload === null) state.filtered = state.movies;
      else
        state.filtered = state.movies.filter((obj) =>
          obj.title.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
  },
  extraReducers: {
    [fetchApi.pending]: (state) => {
      state.loading = true;
    },
    [fetchApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.filtered = payload;
      state.movies = payload;
    },
    [fetchApi.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterMovies } = movieSlice.actions;

export default movieSlice.reducer;
