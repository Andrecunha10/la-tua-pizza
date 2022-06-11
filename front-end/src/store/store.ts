import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userslices"
import cartReducer from "./slices/cardslices"

const store = configureStore({
    reducer:{
        userData: userReducer,
        cartData: cartReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>