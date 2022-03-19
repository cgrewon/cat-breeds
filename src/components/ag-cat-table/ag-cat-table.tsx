import React, { useState } from "react";
import "./ag-cat-table.scss";
import { AgGridReact } from "ag-grid-react";
import { Cat, getRowData } from "../../types/cat.type";
import { useApi } from "../../context/api";
import { AgCatColumnDefs } from "./ag-cat-col-def";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

export default function AgCatTable() {
  const { filteredCats } = useApi();

  const rowData = filteredCats.map((cat) => {
    return getRowData(cat);
  });

  return (
    <div className="ag-theme-alpine-dark tbl-container">
      <AgGridReact
        getRowHeight={() => 70}
        rowData={rowData}
        columnDefs={AgCatColumnDefs}
        enableRangeSelection={true}
        paginationAutoPageSize={true}
        pagination={true}
      ></AgGridReact>
    </div>
  );
}
