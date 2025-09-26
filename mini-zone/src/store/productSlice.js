import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  available: {
    products: [],
    categories: [],
  },
  registered: {
    products: [],
    categories: [],
  },
  searchInput: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    registerProducts(state, action) {
      state.registered = {
        categories: action.payload.reduce((acc, cur) => {
          if (acc.includes(cur.category)) return [...acc];

          return [...acc, cur.category];
        }, []),
        products: action.payload,
      };
    },
    registerAvailableProducts(state, action) {
      state.available = {
        categories: action.payload.reduce((acc, cur) => {
          if (acc.includes(cur.category)) return [...acc];

          return [...acc, cur.category];
        }, []),
        products: action.payload,
      };
    },

    searchInput(state, action) {
      const query = action.payload;

      if (query === "" || query === "all") {
        state.registered.products = state.available.products;
        state.registered.categories = state.available.categories;
        return;
      }

      const lowerCaseQuery = query.trim().toLowerCase();

      const searchedProducts = state.available.products.filter((product) => {
        return (
          product.title.toLowerCase().includes(lowerCaseQuery) ||
          product.category.toLowerCase().includes(lowerCaseQuery)
        );
      });

      state.registered.products = searchedProducts;

      state.registered.categories = searchedProducts.reduce((acc, cur) => {
        if (acc.includes(cur.category)) return [...acc];

        return [...acc, cur.category];
      }, []);
    },
  },
});

export const { registerProducts, registerAvailableProducts, searchInput } =
  productSlice.actions;

export default productSlice.reducer;
