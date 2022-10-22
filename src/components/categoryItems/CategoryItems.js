import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CategoryFieldsHeader from "./CategoryFieldsHeader";
import CategoryFieldsBody from "./CategoryFieldsBody";
import AddCategoryItem from "./AddCategoryItem";

import {
  ADD_NEW_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
} from "../../actions/types";

const CategoryItems = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const [categoryData, setCategoryData] = useState();
  let { id } = useParams();

  const addNewCategoryItem = () => {
    // const data = prepareNewCategoryFieldsData(category, categoryData);
    //const data = prepareCategoryItemsData();
    dispatch({
      type: ADD_NEW_CATEGORY_ITEM,
      payload: { id },
    });
  };

  const deleteCategoryItem = (categoryItemID) => {
    dispatch({
      type: DELETE_CATEGORY_ITEM,
      payload: { id, categoryItemID },
    });
  };

  useEffect(() => {
    let checkIfIDExists = category.filter((item) => {
      return item.id === id;
    });
    if (checkIfIDExists) {
      setCategoryData(...checkIfIDExists);
    }
  }, [id, category]);

  return (
    <div>
      <h1>{categoryData?.categoryName}</h1>
      <div className="container-fluid mt-3">
        <AddCategoryItem addNewCategoryItem={addNewCategoryItem} />
        <div className="container mt-5">
          <div className="row">
            {categoryData?.categoryItems?.map((item) => (
              <div className="col-12 col-md-4" key={item.categoryItemID}>
                <div className="card">
                  <CategoryFieldsHeader
                    id={item.id}
                    titleName={"AMAN"}
                    deleteCategoryItem={() =>
                      deleteCategoryItem(item.categoryItemID)
                    }
                  />
                  <CategoryFieldsBody item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
