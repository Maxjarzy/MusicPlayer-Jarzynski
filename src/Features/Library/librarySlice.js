import { createSlice } from "@reduxjs/toolkit";
import { useGetPlaylistByUserQuery } from "../../Services/dataServices";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: {
      updateAt: Date().toLocaleString(),
      playlists: [],
      songToAdd: "",
      songToDelete: "",
      playlistSelected: "",
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
      state.value.playlistSelected = action.payload;
    },
    setSongToDelete: (state, action) => {
      if (action.payload == "") {
        state.value.songToDelete = "";
      } else {
        const playlist = state.value.playlists.filter(
          (playlist) => playlist.id === state.value.playlistSelected
        );
        const playlistUpdate = playlist[0].playlist.filter(
          (song) => song.id !== action.payload.id
        );
        const playlistNew = {
          name: playlist[0].name,
          playlist: playlistUpdate,
          updateAt: Date().toLocaleString(),
          user: playlist[0].user,
        };
        state.value.songToDelete = playlistNew;
      }
    },
  },
});

export const {
  setPlaylists,
  setSongToAdd,
  setPlaylistsSelected,
  setSongToDelete,
} = librarySlice.actions;
export default librarySlice.reducer;
