import Axios, { AxiosInstance } from 'axios';
import { appConfig } from '../config/AppConfig';
import { ExpensesResponse } from '../types/Splitwise';
import { GenericHttpClient } from './GenericHttpClient';

export class SplitwiseClient extends GenericHttpClient {
  constructor() {
    super(appConfig.SPLITWISE.baseUrl, {
      Authorization: `Bearer ${appConfig.SPLITWISE.apiKey}`,
    });
  }

  public async getExpenses(): Promise<ExpensesResponse> {
    return (await this.axiosClient.get('/get_expenses?limit=100')).data;
  }
}

export default new SplitwiseClient();
