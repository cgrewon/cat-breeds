import React, { createContext, useContext, useEffect } from "react";
import { ApiContextValue } from "../types/api-context-value.type";
import { Cat } from "../types/cat.type";

const HOST: string = "https://api.thecatapi.com/v1/";



export function ApiHooks() {
  const [cats, setCats] = React.useState<Cat[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchBreeds(): Promise<Cat[]> {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(HOST + "breeds")
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setCats(json);
          resolve(json);
        })
        .catch((ex) => {
          reject(ex);
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    (async () => {
      await fetchBreeds();
    })();
  }, []);

  return { cats, loading };
}



export const ApiContext: React.Context<ApiContextValue> = createContext({
  cats: [],
  loading: false,
} as ApiContextValue);

export const ApiProvider = ({ children }: React.PropsWithChildren<any>) => {
  const value = ApiHooks();
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
