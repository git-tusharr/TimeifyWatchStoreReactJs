import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; 
const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      const status = state.cart.filter((key) => key.id === actions.payload.id);
      if (status.length >= 1) {
        toast.warning("Product already added!");
      } else {
        state.cart.push(actions.payload);
        toast.success("Product added to cart!");
      }
    },

    incQnty: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          state.cart[i].qnty++;
          toast.info("Quantity increased");
        }
      }
    },

    decQnty: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          if (state.cart[i].qnty <= 1) {
            toast.error("Quantity cannot be less than 1");
          } else {
            state.cart[i].qnty--;
            toast.info("Quantity decreased");
          }
        }
      }
    },

    cartDataRemove: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id !== actions.payload.id);
      toast.success("Item removed from cart!");
    },
  },
});


















export const { addToCart, incQnty, decQnty, cartDataRemove } = cartSlice.actions;
export default cartSlice.reducer;
