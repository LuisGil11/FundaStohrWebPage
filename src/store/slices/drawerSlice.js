import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  closing: false,
  pages: [],
  father: "",
};

export const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.toggle = true;
      state.closing = false;
      state.pages = action.payload.pages;
      state.father = action.payload.father;
    },
    closeDrawer: (state) => {
      if (state.closing) {
        state.toggle = false;
        state.pages = [];
        state.father = "";
      }
    },
    setClosing: (state, action) => {
      state.closing = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, setClosing } = drawerSlice.actions;
