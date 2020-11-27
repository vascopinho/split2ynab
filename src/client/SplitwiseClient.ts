import Axios, { AxiosInstance } from "axios";
import { appConfig } from "../config/AppConfig";
import { ExpensesResponse } from "../types/Splitwise";
import "axios-debug-log";

export class SplitwiseClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = Axios.create({
      baseURL: appConfig.SPLITWISE.baseUrl,
      headers: {
        Authorization: `Bearer ${appConfig.SPLITWISE.apiKey}`,
      },
    });
  }

  public async getExpenses(): Promise<ExpensesResponse> {
    return (await this.axiosClient.get("/get_expenses?limit=100")).data;
  }
}

export default new SplitwiseClient();
