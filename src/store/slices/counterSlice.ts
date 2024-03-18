import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    incrementCounter: (state, payload: PayloadAction<number>) => {
      return {
        ...state,
        value: state.value + payload.payload,
      };
    },
  },
  initialState: { value: 0 },
});

export default counterSlice;

export const actions = counterSlice.actions;
