import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      user: "",
      updateAt: Date().toLocaleString(),
      playlist: [],
    },
  },
  reducers: {
    addSongToPlaylist: (state, action) => {
      const songExist = state.value.playlist.some((song) => song.id === action.payload.id)
      if(!songExist){
        state.value.playlist.push(action.payload)
        state.value.updateAt = Date().toLocaleString()
      }
    },
    setUserLibrary: (state, action) => {
      state.value.user = action.payload
    }
  },
});

export const {addSongToPlaylist, setUserLibrary} = librarySlice.actions;
export default librarySlice.reducer;
