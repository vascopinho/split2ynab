import { START_TIME } from "..";
import { Splitwise } from "../types/Splitwise";

export class SplitwiseUtils {
  static getExpensesToHandle(expenses: Splitwise.Expense[]) {
    return expenses
      .filter(this.filterPastExpenses)
      .filter(this.filterPayments)
      .filter(this.ignoreDeleted);
  }

  static filterPastExpenses = (expense: Splitwise.Expense) => {
    return new Date(expense.created_at) > START_TIME;
  };

  static filterPayments = (expense: Splitwise.Expense) => {
    return !expense.payment;
  };

  static ignoreDeleted = (expense: Splitwise.Expense) => {
    return expense.deleted_at === null;
  };
}
