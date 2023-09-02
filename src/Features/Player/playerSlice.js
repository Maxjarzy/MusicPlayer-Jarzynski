import { createSlice } from "@reduxjs/toolkit";
import songs from "../../../assets/Data/Songs";

export const playerSlice = createSlice({
  name: "play",
  initialState: {
    value: {
      songToPlay: "",
      playlistToPlay: "",
    },
  },
  reducers: {
    setSongToPlay: (state, action) => {
      state.value.songToPlay = songs.find(item => item.id === action.payload)
    },
    setPlaylistToPlay: (state, action) => {
      state.value.playlists = action.payload;
    },
  },
});

export const {setPlaylistToPlay, setSongToPlay} = playerSlice.actions;
export default playerSlice.reducer;
