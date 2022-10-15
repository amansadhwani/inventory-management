import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryFieldsHeader from "./CategoryFieldsHeader";
import CategoryFieldsBody from "./CategoryFieldsBody";
import AddCategoryFields from "./AddCategoryFields";

export const CategoryFields = () => {
  const { category } = useSelector((state) => state.category);
  const [categoryData, setCategoryData] = useState();
  let { id } = useParams();

  useEffect(() => {
    let checkIfIdExists = category.filter((item) => {
      return item.id === id;
    });
    if (checkIfIdExists) {
      setCategoryData(...checkIfIdExists);
    }
  }, [id, category]);

  return (
    <div>
      <h1>{categoryData?.categoryName}</h1>
      <div className="container-fluid mt-3">
        <div className="container mt-5">
          <div className="row">
            {categoryData?.categoryFields.map((item) => (
              <div className="col-12 col-md-4" key={item.id}>
                <div className="card">
                  <CategoryFieldsHeader id={item.id} titleName={item.name} />
                  <CategoryFieldsBody item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddCategoryFields category={category} categoryData={categoryData} />
    </div>
  );
};
