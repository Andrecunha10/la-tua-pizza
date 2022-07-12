import {createAsyncThunk, createSlice, SerializedError} from '@reduxjs/toolkit';
import { LoadingStatus } from '../../entities/loadingstatus';
import { IUserOrders } from '../../entities/userorders';
import { getOrders } from '../../services/getorders';
import {RootState} from '../store';

export const loadUserOrders = createAsyncThunk(
  'orders/loadOrders',
  async ( userId: string) => {
    const orders = await getOrders(userId);
    return orders;
  },
);

type OrdersState = {
  userOrders: IUserOrders[];
  status: LoadingStatus;
  error: SerializedError | null;
};

const initialState: OrdersState = {
  userOrders: [],
  status: LoadingStatus.idle,
  error: null,
};

const slice = createSlice({
  name: 'userOrders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadUserOrders.pending, state => {
      state.status = LoadingStatus.loading;
      state.error = null;
    });
    builder.addCase(loadUserOrders.fulfilled, (state, action) => {
      state.userOrders = action.payload;
      state.status = LoadingStatus.succeeded;
    });
    builder.addCase(loadUserOrders.rejected, (state, action) => {
      state.status = LoadingStatus.failed;
      state.error = action.error;
    });
  },
});

export default slice.reducer;

export const selectUserOrder = (state: RootState) => state.userOrdersData.userOrders

export const selectLoadOrderInfo = (state: RootState) => ({
  status: state.userOrdersData.status,
  error: state.userOrdersData.error,
});