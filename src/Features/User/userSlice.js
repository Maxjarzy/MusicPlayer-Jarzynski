import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      idToken: "",
      localId: "",
      profilePhoto: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = {
        email: "",
        idToken: "",
      };
    },
    setCameraImage: (state, action) => {
      state.value.profilePhoto = action.payload;
    },
  },
});

export const { setUser, logOut, setCameraImage } = userSlice.actions;
export default userSlice.reducer;
