import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://besteller.nomadicdemo.com/',
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include',
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: () => ({}),
});
