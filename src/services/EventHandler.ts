import splitwiseClientInst, {
  SplitwiseClient,
} from "../client/SplitwiseClient";
import { SplitwiseUtils } from "../utils/SplitwiseUtils";

export class EventHandler {
  constructor(
    private readonly splitwiseClient: SplitwiseClient = splitwiseClientInst
  ) {}

  public async initHandler() {
    const result = await this.splitwiseClient.getTransactions();
    return SplitwiseUtils.filterExpenses(result.expenses);
  }
}

export default new EventHandler();
