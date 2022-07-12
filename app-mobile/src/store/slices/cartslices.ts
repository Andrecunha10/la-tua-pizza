import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../entities/product"
import { RootState } from "../store"

type ICartState = {
    cart: IProduct | null
}

const initialState: ICartState ={
    cart: null
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<IProduct>) =>{
            state.cart = action.payload
        },
        deleteToCart: (state) =>{
            state.cart = null
        }
    }
})

export const {addToCart, deleteToCart} = slice.actions

export default slice.reducer

export const selectCart = (state: RootState) => state.cartData.cart