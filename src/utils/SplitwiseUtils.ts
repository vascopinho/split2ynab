import { Expense } from '../types/Splitwise';
import { appConfig } from '../config/AppConfig';

export class SplitwiseUtils {
  static getExpensesToHandle(expenses: Expense[]) {
    return expenses
      .filter(this.filterPastExpenses)
      .filter(this.filterPayments)
      .filter(this.ignoreDeleted);
  }

  static filterPastExpenses = (expense: Expense) => {
    return new Date(expense.created_at) > appConfig.START_DATE;
  };

  static filterPayments = (expense: Expense) => {
    return !expense.payment;
  };

  static ignoreDeleted = (expense: Expense) => {
    return expense.deleted_at === null;
  };
}
