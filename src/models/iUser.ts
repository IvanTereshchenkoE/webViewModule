export interface IUser {
  id: number;
  widget_id: number;
  name: string;
  phone: string;
  avatar_url: string | null;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  roles: string[] | [];
}
