import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 2,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams > 0 ? state.numOfIceCreams-- : 0;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams > 0 ? state.numOfIceCreams-- : 0;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
