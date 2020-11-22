import Axios, { AxiosInstance } from "axios";
import { appConfig } from "../config/AppConfig";
import { Splitwise } from "../types/Splitwise";
import { YNAB } from "../types/YNAB";

export class YNABClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = Axios.create({
      baseURL: appConfig.YNAB.baseUrl,
      headers: {
        Authorization: `Bearer ${appConfig.YNAB.apiKey}`,
      },
    });
  }

  public async createTransaction(transaction: YNAB.YNABTransactionRequest) {
    try {
      const result = await this.axiosClient.post(
        `/budgets/${appConfig.YNAB.budgetId}/transactions`,
        transaction
      );

      console.log(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}

export default new YNABClient();
