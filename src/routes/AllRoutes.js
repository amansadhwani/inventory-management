import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCategory from "../components/allCategory/AllCategory";
import CategoryItems from "../components/categoryItems/CategoryItems";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/:id" element={<CategoryItems />} />
      <Route exact path="/all-category" element={<AllCategory />} />
    </Routes>
  );
};
