import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  closing: false,
  pages: [],
  father: "",
  title: "",
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
      state.title = action.payload.title;
    },
    closeDrawer: (state) => {
      if (state.closing) {
        state.toggle = false;
        state.pages = [];
        state.father = "";
        state.title = "";
      }
    },
    setClosing: (state, action) => {
      state.closing = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, setClosing } = drawerSlice.actions;
