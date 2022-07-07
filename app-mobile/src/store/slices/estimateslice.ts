import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEstimate } from "../../entities/estimante"
import { RootState } from "../store"

type IEstimateState = {
    currenteEstimante: IEstimate | null
}

const initialState: IEstimateState = {
    currenteEstimante: null
}

const slice = createSlice({
    name: 'estimate',
    initialState,
    reducers:{
        setCurrentEstimate: (state, action: PayloadAction<IEstimate>) => {
            state.currenteEstimante = action.payload
        },
        clearCurrenteEstimate: () => initialState
    }
})

export const { setCurrentEstimate, clearCurrenteEstimate } = slice.actions

export default slice.reducer

export const selectCurrentEstimanete = (state: RootState) => state.estimateData.currenteEstimante