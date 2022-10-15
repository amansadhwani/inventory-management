import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryFields } from "../components/categoryFields/CategoryFields";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/:id" element={<CategoryFields />} />
    </Routes>
  );
};
