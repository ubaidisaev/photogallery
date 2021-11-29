import axios, {  
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export class Http {
  static async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return axios.get(url, config);
  }
}
