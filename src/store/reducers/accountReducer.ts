import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/iUser';

type StateType = {
  userInfo: IUser;
  loading: boolean;
  isAuth: boolean;
};

const initialState: StateType = {
  userInfo: {
    id: 0,
    widget_id: 0,
    name: '',
    phone: '',
    avatar_url: null,
    email: '',
    email_verified_at: null,
    created_at: '',
    updated_at: '',
    roles: [],
  },
  loading: true,
  isAuth: false,
};

const accountSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLogout: (state, action: PayloadAction<string>) => {
      state.userInfo = {
        id: 0,
        widget_id: 0,
        name: '',
        phone: '',
        avatar_url: null,
        email: '',
        email_verified_at: null,
        created_at: '',
        updated_at: '',
        roles: [],
      };
      state.isAuth = false;
    },
  },
});

export const { setUserInfo, setIsAuth, setLoading, setLogout } = accountSlice.actions;
export default accountSlice;
