import Axios, { AxiosInstance } from "axios";
import { appConfig } from "../config/AppConfig";
import { YNABTransactionRequest } from "../types/YNAB";
import logger from "../utils/Logger";
import { GenericHttpClient } from "./GenericHttpClient";

export class YNABClient extends GenericHttpClient {
  constructor() {
    super(appConfig.YNAB.baseUrl, {
      Authorization: `Bearer ${appConfig.YNAB.apiKey}`,
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
