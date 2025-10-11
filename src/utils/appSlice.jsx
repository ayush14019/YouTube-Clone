import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: window.innerWidth >= 768, 
  searchQuery: "", 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: (state) => {
      state.searchQuery = "";
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  setSearchQuery,
  clearSearchQuery,
} = appSlice.actions;
export default appSlice.reducer;
