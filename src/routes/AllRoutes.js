import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryItems from "../components/categoryItems/CategoryItems";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/:id" element={<CategoryItems />} />
    </Routes>
  );
};
