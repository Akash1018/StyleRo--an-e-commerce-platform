import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

store.subscribe(() => {
  const cart = store.getState().cart.products;
  localStorage.setItem("cart", JSON.stringify(cart));
});
