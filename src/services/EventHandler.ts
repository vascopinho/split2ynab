import splitwiseClientInst, {
  SplitwiseClient,
} from "../client/SplitwiseClient";
import ynabClientInst, { YNABClient } from "../client/YNABClient";
import logger from "../utils/Logger";
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
    logger.info(`Found ${result.expenses.length} expenses!`);

    SplitwiseUtils.getExpensesToHandle(result.expenses)
      .filter((e) => !this.processedIds.includes(e.id))
      .map((e) => YNABUtils.buildYNABInfoFromSplitwiseExpense(e))
      .map(async (body) => {
        logger.info(
          `Found splitwise expense to update on ynab: ${body.transaction.memo}`
        );
        await this.ynabClient.createTransaction(body);
        this.processedIds.push(+body.transaction.import_id);
        logger.info(`splitwise expense updated on ynab`);
      });
  }
}

export default new EventHandler();
