import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartitem',
  initialState: {
    cart: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantitty: 1 });
      }
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      console.log(newItem)
      state.cart.splice(newItem, 1)
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;