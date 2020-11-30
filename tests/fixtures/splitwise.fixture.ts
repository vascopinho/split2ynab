import { Expense, User } from '../../src/types/Splitwise';
import moment from 'moment';

const FUTURE_DATE = moment(new Date()).add(1, 'd').toDate();
const PAST_DATE = moment(new Date()).subtract(1, 'd').toDate();

export const splitwiseMyUserFixture = (
  user_id: number = +process.env.SPLITWISE_USER_ID
): User => ({
  user_id,
  net_balance: '350.00',
  owed_share: '350.00',
  paid_share: '700.0',
  user: {
    first_name: 'MyFirstname',
    id: 1,
    last_name: 'MyLastname',
    picture: {
      medium: 'mypicture.jpg',
    },
  },
});

export const splitwiseOtherUserFixture = (): User => ({
  user_id: 12345,
  net_balance: '-350.00',
  owed_share: '350.00',
  paid_share: '0',
  user: {
    first_name: 'OtherFirstname',
    id: 123456,
    last_name: 'OtherLastname',
    picture: {
      medium: 'otherpicture.jpg',
    },
  },
});

export const splitwiseExpenseFixture = (
  users: User[],
  future: boolean = true,
  payment: boolean = false,
  deleted: boolean = false
): Expense => ({
  users,
  payment,
  id: 1234567,
  group_id: 1234567,
  friendship_id: null,
  expense_bundle_id: null,
  description: 'Renda',
  repeats: false,
  repeat_interval: 'never',
  email_reminder: false,
  email_reminder_in_advance: -1,
  next_repeat: null,
  details: null,
  comments_count: 0,
  creation_method: 'equal',
  transaction_method: 'offline',
  transaction_confirmed: false,
  transaction_id: null,
  cost: '700.0',
  currency_code: 'EUR',
  repayments: [
    {
      from: 25358587,
      to: 3155213,
      amount: '350.0',
    },
  ],
  date: future ? FUTURE_DATE : PAST_DATE,
  created_at: future ? FUTURE_DATE : PAST_DATE,
  created_by: {
    first_name: users[0].user.first_name,
    id: users[0].user.id,
    last_name: users[0].user.last_name,
    picture: users[0].user.picture,
  },
  updated_at: future ? FUTURE_DATE : PAST_DATE,
  updated_by: null,
  deleted_at: deleted ? PAST_DATE : null,
  deleted_by: null,
  category: {
    id: 3,
    name: 'Rent',
  },
  receipt: {
    large: null,
    original: null,
  },
});
