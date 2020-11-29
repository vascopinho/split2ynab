import Axios from "axios";
import { AxiosInstance } from "axios";
import logger from "../utils/Logger";

export abstract class GenericHttpClient {
  protected axiosClient: AxiosInstance;

  constructor(baseURL: string, headers: any) {
    this.axiosClient = Axios.create({
      baseURL,
      headers,
    });
    this.axiosClient.interceptors.request.use((x) => {
      logger.info(`REQUEST [${x.method.toUpperCase()}] ${x.baseURL}${x.url}`);
      return x;
    });
    this.axiosClient.interceptors.response.use((x) => {
      logger.info(`RESPONSE [${x.status}] ${x.config.baseURL}${x.config.url}`);
      return x;
    });
  }
}
