import { User } from '../../src/types/Splitwise';

export const splitwiseMyUserFixture = (
  user_id: number = +process.env.SPLITWISE_USER_ID
): User => ({
  user_id,
  net_balance: '100',
  owed_share: '50',
  paid_share: '50',
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
  net_balance: '100',
  owed_share: '50',
  paid_share: '50',
  user: {
    first_name: 'OtherFirstname',
    id: 123456,
    last_name: 'OtherLastname',
    picture: {
      medium: 'otherpicture.jpg',
    },
  },
});
