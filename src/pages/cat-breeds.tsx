import React, { useState } from "react";
import { useApi } from "../context/api";
import { ApiContextValue } from "../types/api-context-value.type";
import { Cat } from "../types/cat.type";
import "./cat-breeds.scss";

export default function CatBreeds() {
  const { cats, loading }: ApiContextValue = useApi();
  
  return (
    <div className="cat-breeds-container">
      <h1>Cat Breeds</h1>
      {loading && <h2>Loading ...</h2>}
      {cats &&
        cats.map((cat: Cat, index: number) => {
          return <div key={index}>{JSON.stringify(cat, null, 2)}</div>;
        })}
    </div>
  );
}
