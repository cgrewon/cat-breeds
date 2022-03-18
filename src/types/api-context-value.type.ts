import { Cat } from "./cat.type";

export type ApiContextValue = {
  cats: Cat[];
  loading: boolean;
};
