import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CategoryFieldsHeader from "./CategoryFieldsHeader";
import CategoryItemsBody from "./CategoryItemsBody";
import AddCategoryItem from "./AddCategoryItem";

import {
  ADD_NEW_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  UPDATE_CATEGORY_SUB_ITEM,
} from "../../actions/types";
import { getTitleName } from "../../helper";
import { Title } from "../common/Title";

const CategoryItems = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const [categoryData, setCategoryData] = useState();
  let { id } = useParams();

  const addNewCategoryItem = () => {
    dispatch({
      type: ADD_NEW_CATEGORY_ITEM,
      payload: { id, categoryFields: categoryData.categoryFields },
    });
  };

  const deleteCategoryItem = (categoryItemID) => {
    dispatch({
      type: DELETE_CATEGORY_ITEM,
      payload: { id, categoryItemID },
    });
  };

  const updateCategorySubItems = (
    e,
    type,
    categorySubItemsID,
    categoryItemID
  ) => {
    dispatch({
      type: UPDATE_CATEGORY_SUB_ITEM,
      payload: {
        id,
        categorySubItemsID,
        categoryItemID,
        [e.target.name]:
          type !== "checkbox" ? e.target.value : e.target.checked,
      },
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
    <>
      <div className="container-fluid mt-3">
        <div className="container mt-5">
          <div className="category-label-btn">
            <Title categoryName={categoryData?.categoryName} />
            <AddCategoryItem addNewCategoryItem={addNewCategoryItem} />
          </div>
          <div className="row">
            {categoryData?.categoryItems?.map((item) => (
              <div className="col-12 col-md-4 mb-3" key={item.categoryItemID}>
                <div className="card">
                  <CategoryFieldsHeader
                    id={item.id}
                    titleName={getTitleName(item, categoryData)}
                    deleteCategoryItem={() =>
                      deleteCategoryItem(item.categoryItemID)
                    }
                  />
                  <CategoryItemsBody
                    categorySubItems={item.categorySubItems}
                    updateCategorySubItems={updateCategorySubItems}
                    categoryItemID={item.categoryItemID}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItems;
