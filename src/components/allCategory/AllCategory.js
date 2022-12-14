import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryFieldsHeader from "../categoryItems/CategoryFieldsHeader";
import CategoryItemsBody from "../categoryItems/CategoryItemsBody";
import { Title } from "../common/Title";
import { getTitleName } from "../../helper";
import {
  ADD_NEW_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  UPDATE_CATEGORY_SUB_ITEM,
} from "../../actions/types";
import AddCategoryItem from "../categoryItems/AddCategoryItem";

const AllCategory = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const addNewCategoryItem = (id, categoryFields) => {
    dispatch({
      type: ADD_NEW_CATEGORY_ITEM,
      payload: { id, categoryFields },
    });
  };
  const deleteCategoryItem = (id, categoryItemID) => {
    dispatch({
      type: DELETE_CATEGORY_ITEM,
      payload: { id, categoryItemID },
    });
  };
  const updateCategorySubItems = (
    e,
    type,
    categorySubItemsID,
    categoryItemID,
    id
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
  return (
    <div className="container-fluid mt-3">
      {category
        .sort((a, b) =>
          a.categoryName > b.categoryName
            ? 1
            : b.categoryName > a.categoryName
            ? -1
            : 0
        )
        .map((element) => {
          return (
            <div key={element.id}>
              <div className="container mt-5">
                <div className="category-label-btn">
                  <Title categoryName={element.categoryName} />
                  <AddCategoryItem
                    addNewCategoryItem={() =>
                      addNewCategoryItem(element.id, element.categoryFields)
                    }
                  />
                </div>
                <div className="row">
                  {element?.categoryItems?.map((item) => (
                    <div
                      className="col-12 col-md-4 mb-3"
                      key={item.categoryItemID}
                    >
                      <div className="card">
                        <CategoryFieldsHeader
                          id={item.id}
                          titleName={getTitleName(item, element)}
                          deleteCategoryItem={() =>
                            deleteCategoryItem(element.id, item.categoryItemID)
                          }
                        />
                        <CategoryItemsBody
                          categorySubItems={item.categorySubItems}
                          updateCategorySubItems={updateCategorySubItems}
                          categoryItemID={item.categoryItemID}
                          id={element.id}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllCategory;
