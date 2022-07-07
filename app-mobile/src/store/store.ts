import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userslices"
import cartReducer from "./slices/cardslices"
import estimateReducer from "./slices/estimateslice"

const store = configureStore({
    reducer:{
        userData: userReducer,
        cartData: cartReducer,
        estimateData: estimateReducer
    },
    middleware: (getDefaultMiddlewares) => {
        const middleware = getDefaultMiddlewares()

        if (__DEV__) {
            const createDebugger = require('redux-flipper').default
            middleware.push(createDebugger())
        }
        return middleware
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>