import Spinner from "../components/spinner/spinner";
import { useApi } from "../context/api";
import { ApiContextValue } from "../types/api-context-value.type";

import "./cat-breeds.scss";
import AgCatTable from "../components/ag-cat-table/ag-cat-table";
import SearchBar from "../components/search-bar/search-bar";

export default function CatBreeds() {
  
  return (
    <div className="cat-breeds-container">
      <h1>Cat Breeds</h1>
      
      <SearchBar/>
      <AgCatTable />    
    </div>
  );
}
