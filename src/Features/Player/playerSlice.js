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
      state.value.playlistToPlay = "";
      state.value.songToPlay = songs.find((item) => item.id === action.payload);
    },
    setPlaylistToPlay: (state, action) => {
      state.value.songToPlay = "";
      state.value.playlistToPlay = songs.filter((element) => {
        return action.payload.find((item) => item.id === element.id);
      });
    },
    setPlaylistInRandom: (state, action) => {
      if (Array.isArray(action.payload)) {
        const auxArray = [...action.payload];
        const newArray = [];
        while (auxArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * auxArray.length);
          newArray.push(auxArray[randomIndex]);
          auxArray.splice(randomIndex, 1);
        }
        state.value.songToPlay = "";
        state.value.playlistToPlay = newArray;
      } else if (typeof action.payload === "object") {
        state.value.songToPlay = action.payload;
      }
    },
  },
});

export const { setPlaylistToPlay, setSongToPlay, setPlaylistInRandom } =
  playerSlice.actions;
export default playerSlice.reducer;
