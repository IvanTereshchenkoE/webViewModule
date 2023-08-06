import { globalApi } from './index';

interface LoginType {
  email: string,
  password: string,
  is_customer_auth: boolean
}

interface UserData {
  id: number;
  widget_id: number;
  name: string;
  phone: string;
  avatar_url: string |  null ;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  roles: string[];
}

interface MyApi {
  getUser: () => UserData; // Запрос данных пользователя, возвращает объект UserData
  loginUser: (body: any) => void; // Мутация для входа пользователя, не возвращает данных
}

const api = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserData, any>({
      query: () => '/api/users/auth',
      providesTags: ['User'],
    }),
    loginUser: builder.mutation<any, any>({
      query: (body: LoginType) => ({
        method: 'POST',
        url: '/api/login',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export type MyApiReducer = ReturnType<typeof api.reducer>;

export const { useGetUserQuery, useLoginUserMutation } = api;

export const { getUser } = api.endpoints;
