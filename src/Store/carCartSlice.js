import { createSlice } from "@reduxjs/toolkit";

const carCartSlice = createSlice({
  name: "carCart",
  initialState: {
    carCart: [],
  },
  reducers: {
    addCarToCart: (state, action) => {
      state.carCart.push(action.payload.id);
    },
  },
});

export default carCartSlice;
