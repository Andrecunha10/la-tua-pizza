import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/user";

type Userstate = {
    loadingUser: boolean,
    user: User | null
}

const initialState: Userstate = {
    loadingUser: true,
    user: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        updateUser: (state, action: PayloadAction<User>) => {
            state.loadingUser = false
            state.user= action.payload
        },
        deleteUser: (state) => {
            state.loadingUser = false
            state.user = null
        }
    }
})

export const {updateUser, deleteUser} = slice.actions

export default slice.reducer