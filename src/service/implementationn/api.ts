import axios, { AxiosInstance } from "axios";
import { IApiProvider } from "../IApiProvider";

export class Api implements IApiProvider {
  private server: AxiosInstance;

  constructor() {
    this.server = axios.create({
      baseURL: 'http://localhost:8093/',
      headers: { 'content-type': 'application/json' },
      timeout: 10000
    })
  }

  async get<Response>(url: string): Promise<Response> {
    const { data } = await this.server.get(url);

    return data;
  };

  async post<Response, Payload>(url: string, payload: Payload): Promise<Response> {
    const { data } = await this.server.post(url, payload);

    return data;
  };
  

  async put<Response, Payload>(url: string, payload?: Payload): Promise<Response> {
    const { data } = await this.server.put(url, payload);

    return data;
  };
}

const api = new Api();

export { api };