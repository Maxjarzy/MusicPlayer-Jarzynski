import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      updateAt: Date().toLocaleString(),
      playlists: [],
      songToAdd:"",
    },
  },
  reducers: {
    setPlaylists: (state, action) => {
      state.value.playlists = action.payload
    },
    setSongToAdd: (state, action) => {
      state.value.songToAdd = action.payload
    }
  },
});

export const {setUserLibrary, setPlaylists, setSongToAdd} = librarySlice.actions;
export default librarySlice.reducer;
