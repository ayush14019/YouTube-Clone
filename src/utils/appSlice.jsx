// import { createSlice } from "@reduxjs/toolkit";

// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     isMenuOpen: true,
//   },
//   reducers: {
//     toggleMenu: (state) => {
//       state.isMenuOpen = !state.isMenuOpen;
//     },
//     closeMenu: (state) => {
//       state.isMenuOpen = false;
//     },
//     openMenu: (state) => {
//       state.isMenuOpen = true;
//     },
//   },
// });

// export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
// export default appSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isMenuOpen: window.innerWidth >= 768, // open on desktop, collapsed on mobile
// };

// const appSlice = createSlice({
//   name: "app",
//   initialState,
//   reducers: {
//     toggleMenu: (state) => {
//       state.isMenuOpen = !state.isMenuOpen;
//     },
//     closeMenu: (state) => {
//       state.isMenuOpen = false;
//     },
//     openMenu: (state) => {
//       state.isMenuOpen = true;
//     },
//   },
// });

// export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
// export default appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: window.innerWidth >= 768, // open on desktop, collapsed on mobile
  searchQuery: "", // Add this
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
