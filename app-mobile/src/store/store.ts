import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userslices"
import cartReducer from "./slices/cartslices"
import estimateReducer from "./slices/estimateslice"
import ordersReducer from './slices/userOrderSlices';
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer:{
        userData: userReducer,
        cartData: cartReducer,
        estimateData: estimateReducer,
        userOrdersData: ordersReducer
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
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;