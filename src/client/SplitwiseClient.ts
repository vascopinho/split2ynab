import Axios, { AxiosInstance } from "axios";

export class SplitwiseClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = Axios.create({
      baseURL: process.env.SPLITWISE_BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.SPLITWISE_API_KEY}`,
      },
    });
  }

  public async getTransactions(): Promise<Splitwise.ExpensesResponse> {
    return (await this.axiosClient.get("/get_expenses")).data;
  }
}

export default new SplitwiseClient();
