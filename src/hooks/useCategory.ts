import { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import { api } from "../service/implementationn/api";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get<T>(url)
      .then(response => {
        setData(response)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [api])

  return { data, isFetching, error };
};