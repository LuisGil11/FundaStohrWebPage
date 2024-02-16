import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  pages: [],
  father: "",
};

export const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.toggle = true;
      state.pages = action.payload.pages;
      state.father = action.payload.father;
    },
    closeDrawer: (state) => {
      console.log("sale");
      state.toggle = false;
      state.pages = [];
      state.father = "";
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
