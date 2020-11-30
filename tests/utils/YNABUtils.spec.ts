import { Expense, User } from '../../src/types/Splitwise';
import { YNABTransactionRequest } from '../../src/types/YNAB';
import { YNABUtils } from '../../src/utils/YNABUtils';
import {
  splitwiseExpenseFixture,
  splitwiseMyUserFixture,
  splitwiseOtherUserFixture,
} from '../fixtures/splitwise.fixture';
import { ynabTransactionFixture } from '../fixtures/ynab.fixture';

let mockedMyUser: User;
let mockedOtherUser: User;
let mockedExpense: Expense;
let mockedUserList: User[];
let mockedYnabTransaction: YNABTransactionRequest;

describe('YNAB Utils', () => {
  beforeEach(() => {
    mockedMyUser = splitwiseMyUserFixture();
    mockedOtherUser = splitwiseOtherUserFixture();
    mockedUserList = [mockedMyUser, mockedOtherUser];
    mockedExpense = splitwiseExpenseFixture(mockedUserList);
    mockedYnabTransaction = ynabTransactionFixture(
      YNABUtils.mapToYNABAmount(mockedExpense),
      mockedExpense.date,
      `${mockedExpense.id}`,
      mockedExpense.description
    );
  });

  it('should filter my user', () => {
    // When
    const filtered = YNABUtils.filterMyUser([mockedMyUser, mockedOtherUser]);

    // Then
    expect(filtered).toEqual(mockedMyUser);
  });

  it('should create amount for ynab from splitwise expense', () => {
    // When
    const amount = YNABUtils.mapToYNABAmount(mockedExpense);

    // Then
    expect(amount).toEqual(+mockedMyUser.net_balance * 1000);
  });

  it('should create ynab transaction', () => {
    // When
    const result = YNABUtils.buildYNABInfoFromSplitwiseExpense(mockedExpense);

    // Then
    expect(result).toEqual(mockedYnabTransaction);
  });
});
