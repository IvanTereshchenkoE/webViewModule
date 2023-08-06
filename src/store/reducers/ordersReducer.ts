import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrders } from '../../models/IOrders';

type ModalsState = {
  orders: IOrders[]
};

const initialState: ModalsState = {
  orders: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrdersList: (state, action: PayloadAction<IOrders[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrdersList } = ordersSlice.actions;
export default ordersSlice;
