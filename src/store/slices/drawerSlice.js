import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state) => {
      console.log("entro");
      state.toggle = true;
    },
    closeDrawer: (state) => {
      console.log("salio");
      state.toggle = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
