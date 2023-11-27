import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type LayoutState = {
  mobileOpen: boolean;
  appBarTitle: string;
};

const initialState: LayoutState = {
  mobileOpen: false,
  appBarTitle: "dashboard",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMobileOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileOpen = action.payload;
    },
    setAppBarTitle: (state, action: PayloadAction<string>) => {
      state.appBarTitle = action.payload;
    },
  },
});

export const { setMobileOpen, setAppBarTitle } = layoutSlice.actions;

export default layoutSlice.reducer;
