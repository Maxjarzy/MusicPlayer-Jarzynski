import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      updateAt: Date().toLocaleString(),
      playlists: [],
    },
  },
  reducers: {
    setPlaylists: (state, action) => {
      state.value.playlists = action.payload
    }
  },
});

export const {setUserLibrary, setPlaylists} = librarySlice.actions;
export default librarySlice.reducer;
