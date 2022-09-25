import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";

const store = configureStore({
    reducer: {
        cartitem: cartSlice.reducer,
    }
})

export default store;