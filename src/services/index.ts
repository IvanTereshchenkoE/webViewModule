import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import { api } from '../http';
import { IOrders } from '../models/IOrders';

type loginResType = {
  'auth-token': string;
  user: {
    avatar_url: string | null;
    created_at: string;
    email: string;
    email_verified_at: string | null;
    id: number;
    name: string;
    phone: string;
    updated_at: string;
    widget_id: number;
  };
};

class AccountService {
  static async login({
    email,
    password,
    is_customer_auth,
  }: {
    email: string;
    password: string;
    is_customer_auth: boolean;
  }): Promise<AxiosResponse<loginResType>> {
    return api.post<loginResType>('api/login', { email, password, is_customer_auth });
  }
  static async getAuthInfo(): Promise<AxiosResponse<any>> {
    // const bearerToken = await AsyncStorage.getItem('@token');
    // const headers = bearerToken ? { Authorization: `Bearer ${bearerToken}` } : undefined;
    return api.get<any>('api/users/auth');
  }
}

class OrdersService {
  static async getOrders(): Promise<AxiosResponse<IOrders[]>> {
    // const bearerToken = await AsyncStorage.getItem('@token');
    // const headers = bearerToken ? { Authorization: `Bearer ${bearerToken}` } : undefined;
    return api.get<IOrders[]>('api/account/orders');
  }
}

export { OrdersService, AccountService };
