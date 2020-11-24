export interface Repayment {
  from: number;
  to: number;
  amount: string;
}

export interface Picture {
  medium: string;
}

export interface CreatedBy {
  id: number;
  first_name: string;
  last_name?: any;
  picture: Picture;
  custom_picture: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface Receipt {
  large?: any;
  original?: any;
}

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  picture: Picture;
}

export interface User {
  user: UserDetails;
  user_id: number;
  paid_share: string;
  owed_share: string;
  net_balance: string;
}

export interface Expense {
  id: number;
  group_id: number;
  friendship_id?: any;
  expense_bundle_id?: any;
  description: string;
  repeats: boolean;
  repeat_interval: string;
  email_reminder: boolean;
  email_reminder_in_advance?: any;
  next_repeat?: any;
  details: string;
  comments_count: number;
  payment: boolean;
  creation_method: string;
  transaction_method: string;
  transaction_confirmed: boolean;
  transaction_id?: any;
  cost: string;
  currency_code: string;
  repayments: Repayment[];
  date: Date;
  created_at: Date;
  created_by: CreatedBy;
  updated_at: Date;
  updated_by?: any;
  deleted_at?: any;
  deleted_by?: any;
  category: Category;
  receipt: Receipt;
  users: User[];
}

export interface ExpensesResponse {
  expenses: Expense[];
}
