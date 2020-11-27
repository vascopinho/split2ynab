import Axios, { AxiosInstance } from "axios";
import { appConfig } from "../config/AppConfig";
import { YNABTransactionRequest } from "../types/YNAB";
import logger from "../utils/Logger";
import "axios-debug-log";

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

  public async createTransaction(transaction: YNABTransactionRequest) {
    try {
      const result = await this.axiosClient.post(
        `/budgets/${appConfig.YNAB.budgetId}/transactions`,
        transaction
      );
    } catch (error) {
      logger.error(error);
    }
  }
}

export default new YNABClient();
