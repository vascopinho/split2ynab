import { appConfig } from "../config/AppConfig";
import { Splitwise } from "../types/Splitwise";
import { YNAB } from "../types/YNAB";

export class YNABUtils {
  static buildYNABInfoFromSplitwiseExpense(
    expense: Splitwise.Expense
  ): YNAB.YNABTransactionRequest {
    return {
      transaction: {
        account_id: appConfig.YNAB.accountId,
        amount: this.mapToYNABAmount(expense),
        approved: false,
        category_id: appConfig.YNAB.uncathegorizedId,
        cleared: "uncleared",
        date: new Date().toISOString().slice(0, 10),
        import_id: `${expense.id}`,
        memo: expense.description,
        payee_id: appConfig.YNAB.payeeId,
      },
    };
  }

  static mapToYNABAmount(expense: Splitwise.Expense) {
    const myPart = this.filterMyUser(expense.users);
    return +myPart.net_balance * 1000;
  }

  static filterMyUser(users: Splitwise.User[]) {
    return users.filter((u) => u.user_id === +process.env.SPLITWISE_USER_ID)[0];
  }
}
