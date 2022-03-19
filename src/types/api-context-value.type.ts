import React from "react";
import { Cat } from "./cat.type";

export type ApiContextValue = {
  cats: Cat[];
  filteredCats: Cat[];
  loading: boolean;
  search: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>
};
