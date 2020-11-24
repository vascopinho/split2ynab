import { START_TIME } from "..";
import { Expense } from "../types/Splitwise";

export class SplitwiseUtils {
  static getExpensesToHandle(expenses: Expense[]) {
    return expenses
      .filter(this.filterPastExpenses)
      .filter(this.filterPayments)
      .filter(this.ignoreDeleted);
  }

  static filterPastExpenses = (expense: Expense) => {
    return new Date(expense.created_at) > START_TIME;
  };

  static filterPayments = (expense: Expense) => {
    return !expense.payment;
  };

  static ignoreDeleted = (expense: Expense) => {
    return expense.deleted_at === null;
  };
}
