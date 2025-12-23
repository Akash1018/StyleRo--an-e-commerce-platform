import { createSlice } from "@reduxjs/toolkit";

const getCart = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

const items = getCart();

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: items,
    quantity: items.length,
    total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      state.total += action.payload.price;
      state.quantity = state.products.length;
    },
    removeProduct: (state, action) => {
      const product = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (!product) return;

      product.quantity -= 1;
      state.total -= product.price;

      if (product.quantity === 0) {
        state.products = state.products.filter(
          (item) => item._id !== product._id
        );
      }
      state.quantity = state.products.length;
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
