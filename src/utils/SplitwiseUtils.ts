import { START_TIME } from "..";

export class SplitwiseUtils {
  static filterExpenses = (expenses: Splitwise.Expense[]) => {
    return expenses.filter((e) => new Date(e.created_at) < START_TIME);
  };
}
