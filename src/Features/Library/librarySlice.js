import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      user: "partialUser",
      updateAt: Date().toLocaleString(),
      playlists: [],
    },
  },
  reducers: {
    addSongToPlaylist: (state, action) => {
      const songExist = state.value.playlists.some((song) => song.id === action.payload.id)
      if(!songExist){
        state.value.playlists.push(action.payload)
      }
    },
  },
});

export const {addSongToPlaylist} = librarySlice.actions;
export default librarySlice.reducer;
