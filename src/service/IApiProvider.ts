export interface IApiProvider {
  get<Response>(url: string): Promise<Response>;
  put<Response, Payload>(url: string, payload?: Payload): Promise<Response>;
  post<Response, Payload>(url: string, payload: Payload): Promise<Response>;
}