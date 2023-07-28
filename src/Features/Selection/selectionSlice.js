import { createSlice } from "@reduxjs/toolkit";
import songs from "../../../assets/Data/Songs";

export const selectionSlice = createSlice({
    name : 'selection',
    initialState: {
      value: {
        genre:"",
        song:[],
        allSongs: songs,
        songsSelected: []
      }
    },
    reducers: {
        setGenre: (state, action) => {
            state.value.songsSelected = state.value.allSongs.filter(song => song.genre === action.payload)
            state.value.genre = action.payload
        },
        setSong: (state, action) => {
            state.value.song = state.value.songsSelected.filter(song => song.id === action.payload)
            /* state.value.song = action.payload */
        },
    }
})

export const {setGenre, setSong} =  selectionSlice.actions  
export default selectionSlice.reducer