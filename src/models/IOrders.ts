type IOrders = {
  id: number;
  name: string;
  date: string;
  delivery: string | null;
  phone: string;
  email: string;
  details: string;
  payment_method: string;
  time: string;
  status: string;
  amount: string;
  delivery_type: string;
  created_at: string;
  delivery_cost: number;
};

export type { IOrders };
