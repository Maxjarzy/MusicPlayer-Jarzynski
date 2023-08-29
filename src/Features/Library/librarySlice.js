import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      updateAt: Date().toLocaleString(),
      playlists: [],
      songToAdd: "",
      playlistSelected:"",
    },
  },
  reducers: {
    setPlaylists: (state, action) => {
      state.value.playlists = action.payload;
    },
    setSongToAdd: (state, action) => {
      state.value.songToAdd = action.payload;
    },
    setPlaylistsSelected: (state, action) => {
      state.value.playlistSelected = action.payload
    }
  },
});

export const { setUserLibrary, setPlaylists, setSongToAdd, setPlaylistsSelected } =
  librarySlice.actions;
export default librarySlice.reducer;
