import { prependOnceListener } from "process";
import splitwiseClientInst, {
  SplitwiseClient,
} from "../client/SplitwiseClient";
import ynabClientInst, { YNABClient } from "../client/YNABClient";
import { SplitwiseUtils } from "../utils/SplitwiseUtils";
import { YNABUtils } from "../utils/YNABUtils";

export class EventHandler {
  constructor(
    private readonly splitwiseClient: SplitwiseClient = splitwiseClientInst,
    private readonly ynabClient: YNABClient = ynabClientInst,
    private processedIds: number[] = []
  ) {}

  public async runHandler() {
    const result = await this.splitwiseClient.getExpenses();
    SplitwiseUtils.getExpensesToHandle(result.expenses)
      .filter((e) => !this.processedIds.includes(e.id))
      .map((e) => YNABUtils.buildYNABInfoFromSplitwiseExpense(e))
      .map(async (body) => {
        console.log(`Found splitwise expense to update on ynab: ${body}`);
        await this.ynabClient.createTransaction(body);
        this.processedIds.push(+body.transaction.import_id);
        console.log(`splitwise expense updated on ynab: ${body}`);
      });
  }
}

export default new EventHandler();
