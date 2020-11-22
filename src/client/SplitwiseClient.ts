import Axios, { AxiosInstance } from "axios";
import { config } from "dotenv/types";
import { appConfig } from "../config/AppConfig";
import { Splitwise } from "../types/Splitwise";

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

  public async getExpenses(): Promise<Splitwise.ExpensesResponse> {
    return (await this.axiosClient.get("/get_expenses")).data;
  }
}

export default new SplitwiseClient();
