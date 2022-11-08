import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatBreeds from "./pages/cat-breeds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<CatBreeds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
