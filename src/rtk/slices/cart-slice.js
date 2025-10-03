import { createSlice } from "@reduxjs/toolkit";

 export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
        const findProduct = state.find((product) => product.id === action.payload.id);
        if(findProduct) {
          findProduct.quantity += 1;
        }
        else{
            const productWithQuantity = { ...action.payload, quantity: 1 };
            state.push(productWithQuantity);
        }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    clearCart: () => {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;