import { appConfig } from "../config/AppConfig";
import { Expense, User } from "../types/Splitwise";
import { YNABTransactionRequest } from "../types/YNAB";

export class YNABUtils {
  static buildYNABInfoFromSplitwiseExpense(
    expense: Expense
  ): YNABTransactionRequest {
    return {
      transaction: {
        account_id: appConfig.YNAB.accountId,
        amount: this.mapToYNABAmount(expense),
        approved: false,
        category_id: appConfig.YNAB.uncathegorizedId,
        cleared: "uncleared",
        date: expense.date.toString(),
        import_id: `${expense.id}`,
        memo: expense.description,
        payee_id: appConfig.YNAB.payeeId,
      },
    };
  }

  static mapToYNABAmount(expense: Expense) {
    const myPart = this.filterMyUser(expense.users);
    return +myPart.net_balance * 1000;
  }

  static filterMyUser(users: User[]) {
    return users.filter((u) => u.user_id === +appConfig.SPLITWISE.userId)[0];
  }
}
