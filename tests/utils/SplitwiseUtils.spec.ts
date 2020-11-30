import { Expense, User } from '../../src/types/Splitwise';
import { SplitwiseUtils } from '../../src/utils/SplitwiseUtils';
import {
  splitwiseExpenseFixture,
  splitwiseMyUserFixture,
  splitwiseOtherUserFixture,
} from '../fixtures/splitwise.fixture';

let mockedMyUser: User;
let mockedOtherUser: User;
let mockedPastExpense: Expense;
let mockedFutureExpense: Expense;
let mockedPaymentExpense: Expense;
let mockedDeletedExpense: Expense;
let mockedUserList: User[];

describe('Splitwise Utils', () => {
  beforeEach(() => {
    mockedMyUser = splitwiseMyUserFixture();
    mockedOtherUser = splitwiseOtherUserFixture();
    mockedUserList = [mockedMyUser, mockedOtherUser];
    mockedPastExpense = splitwiseExpenseFixture(mockedUserList, false);
    mockedFutureExpense = splitwiseExpenseFixture(mockedUserList);
    mockedPaymentExpense = splitwiseExpenseFixture(mockedUserList, true, true);
    mockedDeletedExpense = splitwiseExpenseFixture(
      mockedUserList,
      true,
      false,
      true
    );
  });

  it('should combine all filters', () => {
    // When
    const result = SplitwiseUtils.getExpensesToHandle([
      mockedFutureExpense,
      mockedPastExpense,
      mockedPaymentExpense,
      mockedDeletedExpense,
    ]);

    // Then
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(mockedFutureExpense);
  });

  describe('should filter past expenses', () => {
    it('should return true when in future', () => {
      // When
      const isFuture = SplitwiseUtils.filterPastExpenses(mockedFutureExpense);

      // Then
      expect(isFuture).toBe(true);
    });

    it('should return false when in past', () => {
      // When
      const isFuture = SplitwiseUtils.filterPastExpenses(mockedPastExpense);

      // Then
      expect(isFuture).toBe(false);
    });
  });

  describe('should filter payment expenses', () => {
    it('should return false when is payment', () => {
      // When
      const result = SplitwiseUtils.filterPayments(mockedPaymentExpense);

      // Then
      expect(result).toBe(false);
    });

    it('should return true when is expense', () => {
      // When
      const result = SplitwiseUtils.filterPayments(mockedPastExpense);

      // Then
      expect(result).toBe(true);
    });
  });

  describe('should ignore deleted expenses', () => {
    it('should return false when there is a deleted date set', () => {
      // When
      const result = SplitwiseUtils.ignoreDeleted(mockedDeletedExpense);

      // Then
      expect(result).toBe(false);
    });

    it('should return true when deleted date is null', () => {
      // When
      const result = SplitwiseUtils.ignoreDeleted(mockedPastExpense);

      // Then
      expect(result).toBe(true);
    });
  });
});
